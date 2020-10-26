import React from 'react';

export default function SearchAndDisplay(props){
 
    return <>
    <div dangerouslySetInnerHTML={{ __html: props.data }} />
    </>
}

