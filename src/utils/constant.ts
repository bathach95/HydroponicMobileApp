export class Constant {

    // server IP or domain name
    public static HOST: string = 'http://192.168.1.106:3210';

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
    },{
        label: "Water Culture",
        value: "water culture"
    }, {
        label: "Aeroponics",
        value: "aeroponics"
    }, {
        label: "Wick System",
        value: "wick system"
    }];

    // default report time in second
    public static DEFAULT_REPORT_TIME : number = 3;

    // time format for parsing
    public static PARSE_TIME_FORMAT = "MM/DD/YYYY HH:mm A";
}