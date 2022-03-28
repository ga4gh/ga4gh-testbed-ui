const flattenReportCases = report => {
    console.log("going to flatten report");
    console.log(report);
    let cases = [];

    if (report.hasOwnProperty("phases")) {
        report.phases.forEach(phase => {

            if (phase.hasOwnProperty("tests")) {
                phase.tests.forEach(test => {

                    if (test.hasOwnProperty("cases")) {
                        test.cases.forEach(testCase => {
                            let newCase = {...testCase};
                            newCase.phase_name = phase.phase_name;
                            newCase.test_name = test.test_name;
                            cases.push(newCase);
                        })
                    }
                })
            }
        })
    }
    
    console.log("flatten report success");
    return cases;
}

export {
    flattenReportCases
}