const express = require( 'express' );
const app = express();
const port = 3000;
/* eslint-disable no-console */

const { Sequelize, DataTypes, Op } = require( 'sequelize' );

const {
    POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_DB
} = process.env;

const sequelize = new Sequelize( POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
    host: POSTGRES_HOST,
    dialect: 'postgres'
});

const codeLength = 32;
const Site = sequelize.define( 'Site', {
    id: {
        type: DataTypes.UUID,
        defaultType: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: DataTypes.STRING( codeLength ),
        unique: true,
        allowNull: false
    },
    someJsonValue: {
        type: DataTypes.JSON,
        allowNull: false
    }
});
const Page = sequelize.define( 'Page', {
    id: {
        type: DataTypes.UUID,
        defaultType: DataTypes.UUIDV4,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    }
});
Page.belongsTo( Site );
Site.hasMany( Page );

app.get( '/', ( req, res ) => {
    res.send( 'Hello World!' );
});

app.get( '/seed', async ( req, res ) => {
    try {
        const site = await Site.create({
            code: Date.now().toString(),
            someJsonValue: {
                date: new Date(),
                timestamp: Date.now(),
                test: true
            }
        });
        await site.createPage({});
        res.send( `Created record ${site.id}\n` );
    } catch ( err ) {
        res.send( err.stack + "\n" );
    }
});

app.get( '/test', async ( req, res ) => {
    try {
        const where = {
            code: {
                [Op.ne]: '1234'
            },
            'someJsonValue.test': true
        };
        const attributes = [ 'id', 'code' ];
        const include = [
            {
                model: Page,
                require: true
            }
        ];
        const sites = await Site.findAll({ where, include, attributes });
        res.send( `Found ${sites.length} sites.\n` );
    } catch ( err ) {
        res.send( err.stack + "\n" );
    }
});

async function start() {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    app.listen( port, () => {
        console.log( `Example app listening at http://localhost:${port}` );
    });
}

start().catch( console.error );
