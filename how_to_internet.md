# How the Internet Works?

##Packet, routers, and Reliability
- information goes from one computer to another in packets of information
- data that is too big to send in one packet are broken down into smaller packets and reassembled when they reach the destination
- routers are like traffic monitors that direct packets to keep them running smoothly through the network
  - routers keep track of multiple paths for sending packets and sends them through cheapest/least congested path based on IP destination address
  - multiple routes makes network fault tolerant = network keeps running even if one part breaks (reliable)
- TCP = transmission control protocol
  - manages sending/receiving of all data as packets
  - checks and acknowledges that all packets received
- TCP and routers are growable and scalable

source: https://www.khanacademy.org/computing/computer-science/internet-intro/internet-works-intro/v/the-internet-packet-routers-and-reliability

## TCP/IP
- TCP/IP can be conceptualized as layers
- Application layer - what programs like web browser directly interact with
- Transport layer - TCP breaks data received from application layer into packets
  - contains headers that indicate order of reassembly for packets and error checking info
- Internet layer - IP attaches origin & destination IP addresses on packages
- Network layer - data sent through, manages getting data to right machine
- this breaking up data into packages makes the internet faster as individual packages can avoid congestion that would occur if all data had to travel the same route

source: https://www.youtube.com/watch?v=PpsEaqJV_A0
