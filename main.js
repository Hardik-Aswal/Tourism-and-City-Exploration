const V = 252;
let metro_lst = new Array(V);
let metro_no = new Array(V);

function metro_fare(dis) {
    console.log("Expected Metro Fare (Weekdays except Sunday) would be: Rs. ");
    if (dis <= 2.0) {
        console.log(10.0);
    } else if (dis > 2.0 && dis <= 5.0) {
        console.log(20.0);
    } else if (dis > 5.0 && dis <= 12.0) {
        console.log(30.0);
    } else if (dis > 12.0 && dis <= 21.0) {
        console.log(40.0);
    } else if (dis > 21.0 && dis <= 32.0) {
        console.log(50.0);
    } else if (dis > 32.0) {
        console.log(60.0);
    } else {
        console.log("Not Known");
    }
    console.log();
}

function minDistance(dist, sptSet) {
    let min = 1000.0;
    let min_index;

    for (let v = 0; v < V; v++) {
        if (sptSet[v] == false && dist[v] <= min) {
            min = dist[v];
            min_index = v;
        }
    }

    return min_index;
}

function printPath(parent, j, src, cnt) {
    if (parent[j] == src || parent[j] <= 0) {
        if (parent[j] == src) {
            cnt.push(metro_no[j]);
            console.log(" -->>" + metro_lst[metro_no[j]]);
        }
        return;
    }
    printPath(parent, parent[j], src, cnt);
    cnt.push(metro_no[j]);
    console.log(" -->> " + metro_lst[metro_no[j]]);
}

function printSolution(dist, src, parent, dest, cnt) {
    console.log("Distance between two station is: " + dist[dest] + " km ");
    metro_fare(dist[dest]);
    console.log(metro_lst[metro_no[src]]);
    cnt.push(metro_no[src]);
    printPath(parent, dest, src, cnt);
}

function dijkstra(graph, src, d, cnt) {
    let dist = new Array(V).fill(1000.0);
    let sptSet = new Array(V).fill(false);
    let parent = new Array(V).fill(-1);

    dist[src] = 0.0;
    for (let count = 0; count < V - 1; count++) {
        let u = minDistance(dist, sptSet);
        sptSet[u] = true;
        for (let v = 0; v < V; v++) {
            if (!sptSet[v] && graph[u][v] && dist[u] + graph[u][v] < dist[v]) {
                parent[v] = u;
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    printSolution(dist, src, parent, d, cnt);
}

const yellow_line=["Samaypur Badli","Rohini Sector 18,19","Haiderpur Badli Mor","Jahangirpuri","Adarsh Nagar","Azadpur","Model Town","G.T.B. Nagar","Vishwavidyalaya","Vidhan Sabha","Civil Lines","Kashmere Gate","Chandni Chowk","Chawri Bazar","New Delhi","Rajiv Chowk","Patel Chowk","Central Secretariat","Udyog Bhawan","Lok Kalyan Marg","Jorbagh","INA","AIIMS","Green Park","Hauz Khas","Malviya Nagar","Saket","Qutub Minar","Chhatarpur","Sultanpur","Ghitorni","Arjan Garh","Guru Dronacharya","Sikandarpur","MG Road","IFFCO Chowk","Huda City Centre"];
const yl=[0.0,0.8,1.3,1.3,1.3,1.5,1.4,1.4,0.8,1.0,1.3,1.1,1.1,1.0,0.8,1.1,1.3,0.9,0.3,1.6,1.2,1.3,0.8,1.0,1.8,1.7,0.9,1.7,1.3,1.6,1.3,1.7,1.5,1.0,1.2,1.1,1.5];

const red_line=["Dilshad Garden","Jhil Mil","Mansarovar Park","Shahdara","Welcome","Seelampur","Shastri Park","Kashmiri Gate","Ti Hazari","Pul Bangash","Pratap Nagar","Shastri Nagar","Inder Lok","Kanhaiya Nagar","Keshav Puram","Netaji Subhash Place","Kohat Enclave","Pitam Pura","Rohini East","Rohini West","Rithala"];
const rl=[0.0,0.9,1.1,1.1,1.2,1.1,1.6,2.2,1.1,0.9,0.8,1.7,1.2,1.2,0.8,1.2,1.1,1.0,0.8,1.3,1.0];

const blue_line=["Dwarka Sector 21","Dwarka Sector 8","Dwarka Sector 9","Dwarka Sector 9","Dwarka Sector 10","Dwarka Sector 11","Dwarka Sector 12","Dwarka Sector 13","Dwarka Sector 14","Dwarka","Dwarka Mor","Nawada","Uttam Nagar West","Uttam Nagar East","Janka Puri West","Janak Puri East","Tilak Nagar","Subhash Nagar","Tagore Garden","Rajouri Garden","Ramesh Nagar","Moti Nagar","Kirti Nagar","Shadipur","Patel Nagar","Rajendra Place","Karol Bagh","Jhandelwalan","R K Ashram Marg","Rajiv Chowk","Barakhamba","Mandi House","Pragati Maidan","Indraprastha","Yamuna Bank","Akshardham","Mayur Vihar Phase-1","Mayur Vihar Extension","New Ashok Nagar","Noida Sector 15","Noida Sector 16","Noida Sector 18","Botanical Garden","Golf Course","Noida City Center","Noida Sector 34","Noida Sector 52","Noida Sector 61","Noida Sector 59","Noida Sector 62","Noida Electronic City"];
const bl=[0.0,1.7,1.0,1.1,1.0,1.0,0.9,0.9,1.5,1.1,1.2,1.0,1.0,1.3,1.0,1.0,0.9,0.9,1.1,1.0,1.2,1.0,0.7,1.3,0.9,1.0,1.2,1.0,1.2,0.7,1.0,0.8,0.8,1.8,1.3,1.8,1.2,0.9,1.0,1.1,1.1,1.1,1.2,1.3,0.8,1.3,1.4,1.1,1.0,1.2];

const orange_line=["New Delhi","Shivaji Stadium","Dhaula Kuan","Delhi Aero City","IGI Airport","Dwarka Sector 21"];
const ol=[0.0,1.9,6.4,6.2,3.4,2.9];

const green_line=["Inder Lok","Ashok Park Main","Punjabi Bagh","Shivaji Park","Madi Pur","Paschim Vihar East","Paschim Vihar West","Peera Garhi","Udyog Nagar","Surajmal Stadium","Nangloi","Nangloi Railway Station","Rajdhani Park","Mundka","Mundka Industrial Area","Gheva Metro Station","Tikri Kalan","Tikri Border","Pandit Shree Ram","Bahdurgarh City","Brig Hoshiar Singh"];
const gl=[0.0,1.4,0.9,1.6,1.1,0.7,1.0,0.9,1.2,0.7,0.8,0.9,0.2,1.3,1.3,2.1,1.7,1.3,1.3,1.5,1.8];

const rapid_line=["Sector 55-66","Sector 54 Chowk","Sector 53-54","Sector 42-43","DLF Phase 1","Sikandarpur","DLF Phase 2","Vodaphone Belvedere Towers","Indus Bank Cyber City","Micromax Moulsari","DLF Phase 3"];
const rapl=[0.0,1.1,1.5,1.3,1.6,1.1,0.7,0.7,0.6,0.6,0.8];

const voilet_line=["Kashmiri Gate","Lal Quila","Jama Masjid","Delhi Gate","ITO","Mandi House","Janpath","Central Secretariat","Khan Market","Jawaharlal Nehru Stadium","Jangpura","Lajpat Nagar","Moolchand","Kailash Colony","Nehru Place","Kalkaji Mandir","Govind Puri","Okhla","Jasola","Sarita Vihar","Mohan Estate","Tughlakabad","Badarpur","Sarai","NHPC Chowk","Mewala Maharajpur","Sector 28 Faridabad","Badkal Mor","Old Faridabad","Neelam Chowk Ajronda","Bata Chowk","Escorts Mujesar","Sant Surdas-Sihi","Raja Nahar Singh"];
const vl=[0.0,1.5,0.8,1.4,1.3,0.8,1.4,1.3,2.1,1.4,0.9,1.5,0.7,1.3,1.0,0.8,0.7,1.1,0.9,1.2,1.2,1.9,1.1,2.5,1.6,0.9,1.2,1.7,1.2,1.6,1.3,1.8,1.7,1.7];

const magenta_line=["Janak Puri West","Dabri Mor","Dashrath Puri","Palam","Sadar Bazaar Cantonment","Terminal 1 IGI Airport","Shankar Vihar","Vasant Vihar","Munirka","RK Puram","IIT Delhi","Hauz Khas","Panchsheel Park","Chirag Delhi","Greater Kailash","Nehru Enclave","Kalkaji Mandir","Okhla NHIC","Sukhdev Vihar","Jamia Milia Islamia","Okhla Vihar","Jasola Vihar Shaheen Bagh","Kalindi Kunj","Okhla Bird Sanctuary","Botanical Garden"];
const ml=[0.0,2.0,1.1,1.5,2.6,1.7,1.8,2.1,1.2,1.4,0.9,1.2,1.5,0.9,0.9,1.3,0.9,0.8,1.1,1.2,0.5,1.8,1.4,1.6,1.7];

const pink_line=["Majlis Park","Azadpur","Shalimar Bagh","Netaji Subhash Place","Shakurpur","Punjabi Bagh West","ESI Hospital","Rajouri Garden","Maya Puri","Naraina Vihar","Delhi Cantt","Durgabai Deshmukh South Campus","Sir Vishweshwaraiah Moti Bagh","Bhikaji Cama Place","Sarojini Nagar","INA","South Extension","Lajpat Nagar","Vinobapuri","Ashram","Hazrat Nizamuddin","Mayur Vihar Phase-1","Mayur Vihar Pocket I","Trilokpuri Sanjay Lake","Vinod Nagar East","Mandawali - West Vinod Nagar","IP Extension","Anand Vihar","Karkar Duma","Karkarduma Court","Krishna Nagar","East Azad Nagar","Welcome","Jaffrabad","Maujpur","Gokulpuri","Johri Enclave","Shiv Vihar"];
const pl=[0.0,2.1,1.6,1.4,1.2,1.4,2.5,1.1,1.5,1.5,1.8,3.6,1.3,1.6,1.2,1.1,1.2,1.6,1.4,1.2,1.9,3.6,0.8,1.3,0.8,0.6,1.0,1.6,1.0,1.1,0.7,1.0,1.1,1.2,1.1,1.3,1.3,0.9];

const blue_line2=["Yamuna Bank","Laxmi Nagar","Nirman Vihar","Preet Vihar","Karkar Duma","Anand Vihar","Kaushambi","Vaishali"];
const bl2=[0.0,1.3,1.1,1.0,1.2,1.1,0.8,1.6];

const green_line2=["Ashok Park Main","Satguru Ram Singh Marg","Kirti Nagar"];
const gl2=[0.0,1.1,1.0];

const aqua_line=["Noida Sector 52","Noida Sector 51","Noida Sector 50","Noida Sector 76","Noida Sector 101","Noida Sector 81","NSEZ Noida","Noida Sector 83","Noida Sector 137","Noida Sector 142","Noida Sector 143","Noida Sector 144","Noida Sector 145","Noida Sector 146","Noida Sector 147","Noida Sector 148","Knowledge Park II","Pari Chowk Greater Noida","Alpha 1 Greater Noida","Delta 1 Greater Noida","GNIDA Office","Depot Greater Noida"];
const al=[0.0,0.3,1.3,1.0,1.1,0.9,2.0,1.1,1.5,1.6,1.0,1.4,1.2,1.7,1.5,1.6,1.5,1.1,0.9,1.5,1.3,0.9];

// Define other lines and fare data similarly

function print_response() {
    console.log("\n\n\n\n");
    console.log("-------------------------------------------");
    console.log("\t---   METRO APP   --- \t\t");
    console.log("-------------------------------------------");
    console.log("For finding shortest route,please enter 1. ");
    console.log("For Ticketing and Token information,please enter 2.");
    console.log("For Delhi Metro Stations,please enter 3.");
    console.log("For Exit, please enter any other key.");
    console.log("Enter Your Response: ");
}

function print_ticket() {
    console.log("\n\n----------TOKEN---------");
    console.log("1. Only One way permitted");
    console.log("2. Validity One day");
    console.log("3. Refund with in 60 min");
    console.log("4. Exit within 170 min, penalty Rs 10 per hour, subject to maximum Rs 50\n");
    console.log("----------TRAVEL CARD---------");
    console.log("1. First Time Rs 150 (including Rs 50 refundable security)");
    console.log("2. Next recharge Rs 200 to Rs 2000");
    console.log("3. Validity - 1 year after every recharge, max 10 years");
    console.log("4. Same station entry/exit Rs 10 charged within 20 min");
    console.log("\n\n");

    console.log("----------BENIFITS OF DELHI METRO SMART CARD---------");
    console.log("1. It provides 10 percent discount on every ride.");
    console.log("2. Off Peak hours - between 6am to 8am, 12pm to 5pm, and 10 pm onwards - can avail a discount of 20 percent.");
    console.log("3. On Sundays and National Holidays - there is a discount of Rs. 10");
    console.log("4. You can buy a card worth Rs 150 to Rs 2000 at one time and return it anytime to get the balance amount back");
    console.log("5. Refundable Security deposit Rs 50");
    console.log("6. Discount is not applicable if Entry/Exit is made from the same station");
    console.log("\n\n");

    console.log("----------TOURIST CARD---------");
    console.log("1. Specially for a single day travel");
    console.log("2. Purchase a card worth Rs 100 and travel the whole day to any station on the Delhi Metro");
    console.log("3. 1 day Rs 200 (Rs 150 + Rs 50 refundable security)");
    console.log("4. 3 Days Rs 500 (Rs. 450 + Rs 50 refundable security)");
    console.log("\n\n");


    // Define other ticketing information similarly
}

// Define other functions similarly

// Main logic starts here
let metro = new Map();
let graph = Array.from({ length: V }, () => Array(V).fill(0));
let count = 0;
let station_index=new Map();

// Iterate over yellow line
for (let i = 0; i < 37; i++) {
    if (!metro.has(yellow_line[i])) {
        metro.set(yellow_line[i], count);
        station_index[yellow_line[i]]=count
        count++;
    }
}

// Iterate over red line
for (let i = 0; i < 21; i++) {
    if (!metro.has(red_line[i])) {
        metro.set(red_line[i], count);
        station_index[red_line[i]]=count
        count++;
    }
}

// Iterate over blue line
for (let i = 0; i < 51; i++) {
    if (!metro.has(blue_line[i])) {
        metro.set(blue_line[i], count);
        station_index[blue_line[i]]=count
        count++;
    }
}

// Replicate the same for other lines...
// Iterate over orange line
for (let i = 0; i < 6; i++) {
    if (!metro.has(orange_line[i])) {
        metro.set(orange_line[i], count);
        station_index[orange_line[i]]=count
        count++;
    }
}

// Iterate over green line
for (let i = 0; i < 21; i++) {
    if (!metro.has(green_line[i])) {
        metro.set(green_line[i], count);
        station_index[green_line[i]]=count
        count++;
    }
}

// Iterate over rapid line
for (let i = 0; i < 11; i++) {
    if (!metro.has(rapid_line[i])) {
        metro.set(rapid_line[i], count);
        station_index[rapid_line[i]]=count
        count++;
    }
}

// Iterate over violet line
for (let i = 0; i < 34; i++) {
    if (!metro.has(voilet_line[i])) {
        metro.set(voilet_line[i], count);
        station_index[voilet_line[i]]=count
        count++;
    }
}

// Iterate over magenta line
for (let i = 0; i < 25; i++) {
    if (!metro.has(magenta_line[i])) {
        metro.set(magenta_line[i], count);
        station_index[magenta_line[i]]=count
        count++;
    }
}

// Iterate over pink line
for (let i = 0; i < 38; i++) {
    if (!metro.has(pink_line[i])) {
        metro.set(pink_line[i], count);
        station_index[pink_line[i]]=count
        count++;
    }
}

// Iterate over blue line 2
for (let i = 0; i < 8; i++) {
    if (!metro.has(blue_line2[i])) {
        metro.set(blue_line2[i], count);
        station_index[blue_line2[i]]=count
        count++;
    }
}

// Iterate over green line 2
for (let i = 0; i < 3; i++) {
    if (!metro.has(green_line2[i])) {
        metro.set(green_line2[i], count);
        station_index[green_line2[i]]=count
        count++;
    }
}

// Iterate over aqua line
for (let i = 0; i < 22; i++) {
    if (!metro.has(aqua_line[i])) {
        metro.set(aqua_line[i], count);
        station_index[aqua_line[i]]=count
        count++;
    }
}

// Initialize graph based on line information

// Yellow line
for (let i = 0; i < 36; i++) {
    let m = metro.get(yellow_line[i]);
    let n = metro.get(yellow_line[i + 1]);
    graph[m][n] = yl[i + 1];
    graph[n][m] = yl[i + 1];
}

// Red line
for (let i = 0; i < 20; i++) {
    let m = metro.get(red_line[i]);
    let n = metro.get(red_line[i + 1]);
    graph[m][n] = rl[i + 1];
    graph[n][m] = rl[i + 1];
}

// Blue line
for (let i = 0; i < 50; i++) {
    let m = metro.get(blue_line[i]);
    let n = metro.get(blue_line[i + 1]);
    graph[m][n] = bl[i + 1];
    graph[n][m] = bl[i + 1];
}

// Replicate the same for other lines...

let k = 0;
// let metro_lst = [];
// let metro_no = {};

for (let [station, index] of metro) {
    metro_lst[k] = station;
    metro_no[index] = k;
    k++;
}


let src=2, dt=11;
let response="3";

print_response();

// Assuming input is taken from console
// You need to implement this part based on your environment
if (response === "1") {
    let cnt = [];

    console.log("Enter starting station :");
    // Take input for source station
    console.log("Enter ending station :");
    // Take input for destination station

    console.log("\nStarting Station is " + metro_lst[metro_no[src]] + " and Ending Station is " + metro_lst[metro_no[dt]]);
    dijkstra(graph, src, dt, cnt);

    console.log("\n\nNumber of station in between these two stations are : " + cnt.length);
} else if (response === "2") {
    print_ticket();
} else if (response === "3") {
    for (let [station, index] of metro) {
        console.log(station + "   |   " + index);
    }
}
