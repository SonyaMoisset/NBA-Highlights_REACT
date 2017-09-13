import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from 'react-reveal'
import 'animate.css/animate.css'

const generateBlocks = ({blocks}) => {
    if (blocks) {
        return blocks.map((block) => {
            return (
                <Reveal key={block.id} effect="animated fadeInUp">
                    
                </Reveal>
            )
        })
    }
}

const Blocks = (props) => {
    
    return(
        <div className="home-blocks">
            {generateBlocks(props)}    
        </div>
    )
}

export default Blocks