export default house = {
  House: {
    roomName: 'Cabin',
    info: `
       This empty building has had haunted activity
       Now this building has been abandoned for 40 years
       it currently sits waiting to be demolished`,
    adjacentRooms: ['FrontDoor'],
  },
  FrontDoor:{
    roomName: 'FrontDoor',
    info:`
     There are only two rooms one left one 
     right which do you take
    `,
    img:'haunted08.jpg',
    adjacentRooms:['LeftDoor','OutSideFoutain','RightDoor',]
  },
  LeftDoor:{
    roomName: 'LeftDoor',
    info:`
    The Room is dark But the black Light
    Reveals hidden graffiti art
    `,
    img:'Haunted09.jpg',
    adjacentRooms:['FrontDoor','LongHall']
  },
  OutSideFoutain:{
    roomName: 'Foutain',
    info:`
    outside is a peaceful fountain that
     is calm and smoothing

    `,
    img:'Haunted10.jpg',
    adjacentRooms:['FrontDoor']
  },
  RightDoor:{
    roomName: 'RightDoor',
    info:`
    as soon as we enter you immidetaly see 
    another door straight head
    `,
    img:'Haunted07.jpg',
    adjacentRooms:['MainRoom','FrontDoor']
  },
  LongHall:{
    roomName: 'LongHall',
    info:`
     It is pitch black and hardly any floor 
    `,
    img:'Haunted06.jpg',
    adjacentRooms:['LeftRoom02','LeftDoor']
  }, Ladder:{
    roomName: 'Ladder',
    info:`
     The ladder was sturdy and lead somewhere 
    `,
    img:'Haunted05.jpg',
    adjacentRooms:['UpperLevel','MainRoom']
  },
  UpperLevel:{
    roomName: 'Upper Level',
    info:`
    Once we climbed the ladder we discover a horrifying face
    `,
    img:'Haunted03.jpg',
    adjacentRooms:['MainRoom','FurtherDown']
  },
  LeftRoom02:{
    roomName: 'Boogie Woogie BlackLight',
    info:`
     
    We enter The Final room and are surprised 
    with more blacklight art
    `,
    img:'Haunted02.jpg',
    adjacentRooms:['Haunted01','Haunted03']
  },
  MainRoom:{
    roomName: 'MainRoom',
    info:`
     We enter the Main Room of the building where 
     we see a Ladder in a distance
    `,
    img:'Haunted01.jpg',
    adjacentRooms:['RightDoor','Ladder']
  },
  FurtherDown:{
    roomName: 'Further Down',
    info:'We come Across all Seeing Eye',
    img:'Haunted04.jpg',
    adjacentRooms:['UpperLevel']
  },
  Haunted:{
    roomName: 'Haunted',
    info:`
     We enter the building not relizing that the floor had been ripped out
    `,
    img:'Haunted.jpg',
    adjacentRooms:['Haunted01','Haunted10']
  },

}
