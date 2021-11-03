import React from "react";
import {Helmet} from "react-helmet";

export default ({title, description, author, tags}) => {

    return (
        <Helmet>
            <title>{title || 'UHB'}</title>
            <meta name={'description'} content={description || 'A blog about music and gear'}/>
            <meta name={'author'} content={author || 'Mark Rudolph'}/>
            <meta name={'keywords'} content={tags?.join(', ') || 'music, gear'}/>
        </Helmet>
    )
}
