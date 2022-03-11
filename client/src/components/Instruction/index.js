import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import "./instruction.css"


export default function Instruction() {
    return (
        <div className="wrapper">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
                className="inner-wrapper">
                <h2>Design your Business Cards</h2>
                <h3>We have design options to help you create your own business card in minutes.</h3>
            </motion.div>
            <motion.div className="steps"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            >
                <motion.div
        
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.7 }}
                    className="step">
                    <div className="numbered-step-num"> 1 </div>
                    <div className="numbered-step-txt1">
                        <p>Pick out the design.</p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.7 }}
                    className="step">
                    <div className="numbered-step-num"> 2 </div>
                    <div className="numbered-step-txt2">
                        <p>Choose fields you want to add.</p>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.7 }}
                    className="step">
                    <div className="numbered-step-num"> 3 </div>
                    <div className="numbered-step-txt3">
                        <p>Export and done!</p>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div className="link-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1.5 }}
            >
                <Link className="hover-underline-animation" to="/card">
                    <p className="link"> Click here to get started!  </p>
                </Link>
            </motion.div>
        </div>

    )
}
