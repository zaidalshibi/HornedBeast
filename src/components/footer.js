import React from "react";
import styles from "./mystyle.module.css";

class Footer extends React.Component {
    render() {
        return (
            <p className={styles.p}>
            All Rights Reserved &copy; 2022 Zaid Alshibi
            </p>
        );
    }
}

export default Footer;