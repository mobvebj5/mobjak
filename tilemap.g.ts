// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010001010101010101010100020101010100010101000000000101000101010101000100000000010000010001010101000001000000010101000100000101010000000001000101000000000001010101010100010001000000010100000001010101000100010001000001010100000000000001000100000100000100000001010100000000000001010000000001010101010101000100010000010100010100010101010101000000010100000100000000000101000000010101000103000101010000000001000101000001010101010100010101010001010001010101010101000001010100010100010101010101010100010101000000000101`, img`
2 2 . 2 2 2 2 2 2 2 2 2 . . 2 2 
2 2 . 2 2 2 . . . . 2 2 . 2 2 2 
2 2 . 2 . . . . 2 . . 2 . 2 2 2 
2 . . 2 . . . 2 2 2 . 2 . . 2 2 
2 . . . . 2 . 2 2 . . . . . 2 2 
2 2 2 2 . 2 . 2 . . . 2 2 . . . 
2 2 2 2 . 2 . 2 . 2 . . 2 2 2 . 
. . . . . 2 . 2 . . 2 . . 2 . . 
. 2 2 2 . . . . . . 2 2 . . . . 
2 2 2 2 2 2 2 . 2 . 2 . . 2 2 . 
2 2 . 2 2 2 2 2 2 . . . 2 2 . . 
2 . . . . . 2 2 . . . 2 2 2 . 2 
. . 2 2 2 . . . . 2 . 2 2 . . 2 
2 2 2 2 2 . 2 2 2 2 . 2 2 . 2 2 
2 2 2 2 2 . . 2 2 2 . 2 2 . 2 2 
2 2 2 2 2 2 . 2 2 2 . . . . 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.dungeon.doorClosedEast,sprites.dungeon.doorLockedWest], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
