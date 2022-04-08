import React from 'react';
import { Tooltip } from '@mui/material';
import progressBarStyles from '../../../styles/common/info/progressBarStyles';

const ProgressBar = props => {
    const classes = progressBarStyles();

    const cellClasses = {
        PASS: classes.cellPass,
        WARN: classes.cellWarn,
        FAIL: classes.cellFail,
        SKIP: classes.cellSkip,
        UNKNOWN: classes.cellFail
    }

    return (
        <div className={classes.div}>
            {props.cases.map((testCase, i) => {
                const widthPercent = 100.0 / props.cases.length;
                const styles = {
                    width: `calc(${widthPercent}% - 3px`
                }
                if (i === 0) {
                    styles.borderTopLeftRadius = '25px'
                    styles.borderBottomLeftRadius = '25px'
                }
                if (i === props.cases.length - 1) {
                    styles.borderTopRightRadius = '25px'
                    styles.borderBottomRightRadius = '25px'
                }

                return (
                    <Tooltip
                        title={`${testCase.phase_name} -> ${testCase.test_name} -> ${testCase.case_name}`}
                    >
                        <div style={styles} className={cellClasses[testCase.status]} />
                    </Tooltip>
                )
            })}
        </div>
    )
}

export default ProgressBar;