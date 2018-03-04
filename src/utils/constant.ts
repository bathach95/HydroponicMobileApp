export class Constant {

    // server IP or domain name
    public static HOST: string = 'http://192.168.1.107:3210';

    // hydroponic types
    public static HYDROPONIC_TYPE: any = [{
        label: "Drip System",
        value: "drip system"
    }, {
        label: "EBB-Flow",
        value: "ebb-flow"
    }, {
        label: "NFT",
        value: "nft"
    }, {
        label: "Water Culture",
        value: "water culture"
    }, {
        label: "Aeroponics",
        value: "aeroponics"
    }, {
        label: "Wick System",
        value: "wick system"
    }];

    // actuator type
    public static ACTUATOR_TYPE: any[] =
    [{
        type: 'Water',
        numberOfActuator: [11, 12]
    }, {
        type: 'Fan',
        numberOfActuator: [31, 32]
    }, {
        type: 'Lighting',
        numberOfActuator: [21, 22]
    }, {
        type: 'Oxygen',
        numberOfActuator: [41, 42]
    }];

    // actuator priority
    public static ACTUATOR_PRIORITY: string[] = ['Primary', 'Secondary'];

    // default report time in second
    public static DEFAULT_REPORT_TIME: number = 3;

    // time format for parsing
    public static PARSE_TIME_FORMAT = "MM/DD/YYYY HH:mm A";

    // default interval and delay time for schedule
    public static DEFAULT_INTERVAL_TIME = 10;
    public static DEFAULT_DELAY_TIME = 0;
}