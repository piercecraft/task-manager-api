module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.js'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/__tests__/'
    ],
    coverageThreshold: {
        global: {
            statements: 80,
            branches: 60,
            functions: 70,
            lines: 80
        }
    },
    reporters: [
        'default',
        ['jest-junit', { outputDirectory: 'test-results', outputName: 'junit.xml' }]
    ]
};