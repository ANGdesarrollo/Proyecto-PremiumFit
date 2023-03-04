import React, { useState, useEffect } from 'react';

export const Titles = ( { description } ) => {
    return (
        <div className="d-flex justify-content-center titles">
            <h5>{ description }</h5>
        </div>
    );
};
