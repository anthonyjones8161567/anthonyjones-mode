const _ = require('lodash');
const qiskit = require('qiskit');

function generateRandomQubit() {
    return Math.random() > 0.5 ? qiskit.Qubit.ONE : qiskit.Qubit.ZERO;
}

function applyHadamardGate(qubit) {
    return qiskit.HadamardGate.applyTo(qubit);
}

function measureQubit(qubit) {
    return qiskit.Measure.applyTo(qubit);
}

function simulateQuantumCircuit(circuit) {
    return qiskit.Simulator.run(circuit);
}

module.exports = {
    generateRandomQubit,
    applyHadamardGate,
    measureQubit,
    simulateQuantumCircuit
};
