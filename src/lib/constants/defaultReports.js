const defaultReport = {
    schema_name: "ga4gh-testbed-report",
    schema_version: "0.1.0",
    testbed_name: "Unspecified GA4GH Testbed",
    testbed_version: "v1.0.0",
    testbed_description: "A generic testbed",
    platform_name: "GA4GH Starter Kit Reference Deployment",
    platform_description: "Reference deployment of the GA4GH Starter Kit running on AWS",
    input_parameters: {
        token: "[SECURE]",
        url: "https://some-site.genomics.org"
    },
    start_time: "2021-10-22T15:00:00Z",
    end_time: "2021-10-22T15:30:00Z",
    status: "FAIL",
    summary: {
        unknown: 0,
        passed: 3,
        warned: 1,
        failed: 1,
        skipped: 3
    },
    phases: [
        {
            phase_name: "Sequences",
            phase_description: "Tests all sequence endpoints",
            start_time: "2021-10-22T15:00:00Z",
            end_time: "2021-10-22T15:30:00Z",
            status: "WARN",
            summary: {
                unknown: 0,
                passed: 2,
                warned: 1,
                failed: 0,
                skipped: 1
            },
            tests: [
                {
                    test_name: "Get Sequence",
                    test_description: "Get a reference sequence",
                    start_time: "2021-10-22T15:00:00Z",
                    end_time: "2021-10-22T15:30:00Z",
                    status: "PASS",
                    summary: {
                        unknown: 0,
                        passed: 1,
                        warned: 0,
                        failed: 0,
                        skipped: 1
                    },
                    cases: [
                        {
                            case_name: "Get e. coli",
                            case_description: "Get e. coli reference sequence",
                            log_messages: [
                                "log message A",
                                "log message B"
                            ],
                            start_time: "2021-10-22T15:00:00Z",
                            end_time: "2021-10-22T15:30:00Z",
                            status: "PASS",
                            message: "Retrieved successfully"
                        },
                        {
                            case_name: "Get s. cerevisiae",
                            case_description: "Get s. cerevisiae reference sequence",
                            log_messages: [],
                            start_time: "2021-10-22T15:00:00Z",
                            end_time: "2021-10-22T15:30:00Z",
                            status: "SKIP",
                            message: "Skipping test"
                        }
                    ]
                },
                {
                    test_name: "List Sequences",
                    test_description: "List reference sequences",
                    start_time: "2021-10-22T15:00:00Z",
                    end_time: "2021-10-22T15:30:00Z",
                    status: "WARN",
                    summary: {
                        unknown: 0,
                        passed: 1,
                        warned: 1,
                        failed: 0,
                        skipped: 0
                    },
                    cases: [
                        {
                            case_name: "List bacterial sequences",
                            case_description: "List all bacterial reference sequences",
                            log_messages: [],
                            start_time: "2021-10-22T15:00:00Z",
                            end_time: "2021-10-22T15:30:00Z",
                            status: "WARN",
                            message: "Passed with some warnings"
                        },
                        {
                            case_name: "List fungal sequences",
                            case_description: "List all fungal reference sequences",
                            log_messages: [],
                            start_time: "2021-10-22T15:00:00Z",
                            end_time: "2021-10-22T15:30:00Z",
                            status: "PASS",
                            message: "All fungal sequences retrieved"
                        }
                    ]
                }
            ]
        },
        {
            phase_name: "Variants",
            phase_description: "Tests all variants endpoints",
            start_time: "2021-10-22T15:00:00Z",
            end_time: "2021-10-22T15:30:00Z",
            status: "FAIL",
            summary: {
                unknown: 0,
                passed: 1,
                warned: 0,
                failed: 1,
                skipped: 2
            },
            tests: [
                {
                    test_name: "Get Variant",
                    test_description: "Get an observed variant",
                    start_time: "2021-10-22T15:00:00Z",
                    end_time: "2021-10-22T15:30:00Z",
                    status: "FAIL",
                    summary: {
                        unknown: 0,
                        passed: 1,
                        warned: 0,
                        failed: 1,
                        skipped: 0
                    },
                    cases: [
                        {
                            case_name: "Get synonymous mutation",
                            case_description: "Get the specified synonymous mutation",
                            log_messages: [],
                            start_time: "2021-10-22T15:00:00Z",
                            end_time: "2021-10-22T15:30:00Z",
                            status: "PASS",
                            message: "Retrieved successfully"
                        },
                        {
                            case_name: "Get non-synonymous mutation",
                            case_description: "Get the specified non-synonymous mutation",
                            log_messages: [],
                            start_time: "2021-10-22T15:00:00Z",
                            end_time: "2021-10-22T15:30:00Z",
                            status: "FAIL",
                            message: "Failed to retrieve the specified non-synonymous mutation"
                        }
                    ]
                },
                {
                    test_name: "List Variants",
                    test_description: "Get filtered lists of desired variants",
                    start_time: "2021-10-22T15:00:00Z",
                    end_time: "2021-10-22T15:30:00Z",
                    status: "SKIP",
                    summary: {
                        unknown: 0,
                        passed: 0,
                        warned: 0,
                        failed: 0,
                        skipped: 2
                    },
                    cases: [
                        {
                            case_name: "List synonymous mutations",
                            case_description: "List all synonymous mutations",
                            log_messages: [],
                            start_time: "2021-10-22T15:00:00Z",
                            end_time: "2021-10-22T15:30:00Z",
                            status: "SKIP",
                            message: "Test skipped"
                        },
                        {
                            case_name: "List non-synonymous mutations",
                            case_description: "List all non-synonymous mutations",
                            log_messages: [],
                            start_time: "2021-10-22T15:00:00Z",
                            end_time: "2021-10-22T15:30:00Z",
                            status: "SKIP",
                            message: "Test skipped"
                        }
                    ]
                }
            ]
        }
    ]
}

export {
    defaultReport
}