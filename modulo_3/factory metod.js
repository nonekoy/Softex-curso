class Computer {
    constructor(ram, hdd, cpu) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }

    getRAM() {
        return this.ram;
    }

    getHDD() {
        return this.hdd;
    }

    getCPU() {
        return this.cpu;
    }

    getType() {
        return "Generic";
    }

    toString() {
        return `${this.getType()} [RAM=${this.ram}GB, HDD=${this.hdd}GB, CPU=${this.cpu}GHz]`;
    }
}

class PC extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu);
    }

    getType() {
        return "PC";
    }
}

class Server extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu);
    }

    getType() {
        return "Server";
    }
}

class ComputerFactory {
    static createComputer(type, ram, hdd, cpu) {
        if (type.toLowerCase() === "pc") {
            return new PC(ram, hdd, cpu);
        } else if (type.toLowerCase() === "server") {
            return new Server(ram, hdd, cpu);
        } else {
            return null; // Pode retornar null ou lançar uma exceção, dependendo dos requisitos.
        }
    }
}

const pc = ComputerFactory.createComputer("PC", "8", "500", "2.4");
const server = ComputerFactory.createComputer("Server", "32", "2000", "3.0");

console.log(pc.toString());
console.log(server.toString());