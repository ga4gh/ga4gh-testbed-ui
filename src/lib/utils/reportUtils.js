const flattenReportCases = report => {
    let cases = [];
    report.phases.forEach(phase => {
        phase.tests.forEach(test => {
            test.cases.forEach(testCase => {
                let newCase = {...testCase};
                newCase.phase_name = phase.phase_name;
                newCase.test_name = test.test_name;
                cases.push(newCase);
            })
        })
    })
    return cases;
}

export {
    flattenReportCases
}