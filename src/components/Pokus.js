import React from 'react';
import PropTypes from 'prop-types';
import LightLayout from './LightLayout';
import Button from './Button';
import Radium from 'radium';

const Pokus = ({ numLights, interval, focus, rest, onButtonClick }) => {
    return (
        <div style={styles.encapsulator} >
            <div style={styles.lens}>
                <Button onClick={() => onButtonClick()} />
                {rest &&
                    <LightLayout
                        rest={rest}
                        numLights={numLights}
                        interval={parseFloat(interval)}
                        on={rest}
                    />
                }
                {focus &&
                    <LightLayout
                        rest={rest}
                        numLights={numLights}
                        interval={parseFloat(interval)}
                        on={focus}
                    />
                }
            </div>
            <div style={styles.shadow}> </div>
        </div>
    );
};


let fade = Radium.keyframes({
    '0%': {
        opacity: '0'
    },
    '100%': {
        opacity: '.9'
    }
});


const styles = {
    encapsulator: {
        position: 'relative'
    },

    shadow: {
        width: '230px',
        margin: '30px 0 0 0px',
        height: '20px',
        //Instead of the line below you could use @include border-radius($radius, $vertical-radius)
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, .3)',
        animation: 'x 9s 3s both',
        animationName: fade
    },

    lens: {
        borderRadius: '50%',

        width: '224px',
        height: '224px',

        marginTop: '15px',
        animation: 'x ease-in 5s both',
        animationName: fade,
        animationDelay: '0s',
        opacity: '0',
        background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAS0lEQVQYV42PMQ4AIAgDyy7/fyjuGogYFExkgnKBlrjxQCjpAm4cJespgg5V8Abv5T0b+HoXdQIwKk9u0uHDY0qwBIW/wJT6dVH1CZzOJAuMdT5xAAAAAElFTkSuQmCC) repeat',
        boxShadow: '0 3px 0 rgba(0, 0, 0, .4)'
    },
};

Pokus.propTypes = {
    onButtonClick: PropTypes.func,
    numLights: PropTypes.number,
    interval: PropTypes.number,
    rest: PropTypes.bool,
    focus: PropTypes.bool,
};

export default Radium(Pokus);