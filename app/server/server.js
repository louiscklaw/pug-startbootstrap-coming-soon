// server.js

const path = require( 'path' );

PROJ_HOME = path.join( __dirname, '..', '..' )
DOCS_DIR = path.join( PROJ_HOME, 'docs' )

var express = require( 'express' )
const app = express()

app.use( express.static( DOCS_DIR ) )

app.listen( 8081, function () {
    console.log( 'started' );
} )
