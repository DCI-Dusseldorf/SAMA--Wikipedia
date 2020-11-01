function array_chunk ( array, chunkSize = 3){
    const chunks = Math.ceil( array.length / chunkSize );
    const arrays = [];
    for ( let i = 0; i < chunks; i++ ){
        arrays.push( array.slice( i * chunkSize, i * chunkSize + chunkSize ) );
    }
    return arrays;
}

import React from 'react'

export default function ArrayChunk({list}) {
    return list.map(
        chunk => <ul style={{display:'inline-block'}}>{
            chunk.map( article => <li>{article.title}</li> )
        }</ul>
    );
}