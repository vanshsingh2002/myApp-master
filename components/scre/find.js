// import React, { useState } from 'react';
// import { View, Text, TextInput, ScrollView, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';

// const doctorsData = [
//   { id: '1', name: 'Dr. John Smith', image: require('../../assets/favicon.png') },
//   { id: '2', name: 'Dr. Emily Davis', image: require('../../assets/favicon.png') },
//   { id: '3', name: 'Dr. Mark Johnson', image: require('../../assets/favicon.png') },
//   { id: '4', name: 'Dr. Sarah Lee', image: require('../../assets/favicon.png') },
//   { id: '5', name: 'Dr. Michael Brown', image: require('../../assets/favicon.png') },
//   { id: '6', name: 'Dr. Lisa Taylor', image: require('../../assets/favicon.png') },
//   // Add more doctors to the list with their images
// ];

// export default function FindDoctor() {
//   const [searchText, setSearchText] = useState('');
//   const [selectedDoctor, setSelectedDoctor] = useState(null);

//   const filteredDoctors = doctorsData.filter((doctor) =>
//     doctor.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <ScrollView style={styles.container}>
//       {selectedDoctor ? (
//         // Display doctor details screen
//         <View style={styles.doctorDetails}>
//           <Image source={selectedDoctor.image} style={styles.doctorImage} />
//           <Text style={styles.doctorName}>{selectedDoctor.name}</Text>
//           {/* Add more details or actions for the selected doctor */}
//           <TouchableOpacity onPress={() => setSelectedDoctor(null)}>
//             <Text style={styles.goBack}>Go Back</Text>
//           </TouchableOpacity>
//         </View>
//       ) : (
//         // Display the list of doctors
//         <View style={styles.doctorList}>
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Search for a doctor"
//             onChangeText={(text) => setSearchText(text)}
//           />
//           {filteredDoctors.map((doctor) => (
//             <TouchableOpacity
//               key={doctor.id}
//               onPress={() => setSelectedDoctor(doctor)}
//             >
//               <View style={styles.doctorItem}>
//                 <Image source={doctor.image} style={styles.doctorImage} />
//                 <Text style={styles.doctorName}>{doctor.name}</Text>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   searchInput: {
//     // height: 40,
//     // borderColor: 'white',
//     borderTopColor : 'white',
//     borderLeftColor : 'white',
//     borderRightColor : 'white',
//     borderBottomColor : 'gray',
//     borderWidth: 1,
//     marginBottom: 56,
//     marginTop:25,
//     padding: 8,
//     textAlign: 'center', // Center the text horizontally
//     // textAlignVertical: 'center', // Center the text vertically
//   },
//   doctorItem: {
//     padding: 12,
//     marginBottom: 30,
//   },
//   doctorImage: {
//     width: 50,
//     height: 50, // Adjust the image height as needed
//     marginBottom: 8,
//     marginLeft : 50,
//     borderColor : 'black',
//     borderWidth : 2,
//     borderRadius : 10,
//   },
//   doctorName: {
//     textAlign: 'center',
//   },
//   // goBack: {
//   //   color: 'blue',
//   //   textDecorationLine: 'underline',
//   //   marginTop: 16,
//   // },
// });
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, Dimensions, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import CustomButton from './customB';

const doctorsData = [

    {
      id: '1',
      name: 'Dr. John Smith',
      image: require('../../assets/doctor.jpg'),
      services: ['New Born', 'Pregnancy', 'New Mother'], // Add the services here
      availability: ['Monday - Friday (10Am - 1PM)','Saturday (2PM - 5PM)'],
      Details: 'Gynacologist 15yrs o. Gold Medalist' // Add the availability here
    },
    {
      id: '2',
      name: 'Dr. Emily Davis',
      image: require('../../assets/doctor2.jpg'),
      services: ['Service 2', 'Service 4'],
      availability: ['Tuesday - Thursday (8pm - 10pm)','Saturday (10Am)'],
      Details:'Detail2',
    },
    // Add more doctor data here
  
    { id: '3', name: 'Dr. Mark Johnson', image: require('../../assets/doctor2.jpg'),services: ['Service 2', 'Service 4'],
    availability: ['Tuesday - Thursday (8pm - 10pm)','Saturday (10Am)'], 
    Details:'Detail3',
  },
    { id: '4', name: 'Dr. Sarah Lee', image: require('../../assets/doctor.jpg'),
    services: ['Service 2', 'Service 4'],
    availability: ['Tuesday - Thursday (8pm - 10pm)','Saturday (10Am)'],
    Details:'Detail4', },

    { id: '5', name: 'Dr. Michael Brown', image: require('../../assets/doctor2.jpg'),
    services: ['Service 2', 'Service 4'],
    availability: ['Tuesday - Thursday (8pm - 10pm)','Saturday (10Am)'],
    Details:'Detail5', },
    { id: '6', name: 'Dr. Lisa Taylor', image: require('../../assets/doctor.jpg'),
    services: ['Service 2', 'Service 4'],
    availability: ['Tuesday - Thursday (8pm - 10pm)','Saturday (10Am)'], 
    Details:'Detail6',},
  // Your doctor data here
];

export default function FindDoctor() {
  const [searchText, setSearchText] = useState('');
  const [numColumns, setNumColumns] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    const screenWidth = Dimensions.get('window').width;
    const newNumColumns = Math.floor(screenWidth / 200); // Adjust 200 to the width of your cards
    setNumColumns(newNumColumns);
  }, []);

  const filteredDoctors = doctorsData.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleDoctorPress = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a doctor"
        onChangeText={(text) => setSearchText(text)}
      />
      {selectedDoctor ? (
        <View style={styles.doctorDetailsContainer}>
          <Text style={styles.Dr}>Doctor Profile</Text>
          <View style={styles.header}>
          <View style={styles.sub1}>
          <Image source={selectedDoctor.image} style={styles.selectedDoctorImage} />
          <Text style={styles.selectedDoctorName}>{selectedDoctor.name}</Text>
          </View>
          <View style={styles.sub2}>
            <Text>{selectedDoctor.Details}</Text>
          </View>
          </View>
          <Text style={styles.Stext}>Services</Text>
          <View style={styles.Services}> 
          <Text style={[styles.doctorServices, styles.horizontalServices]}> {selectedDoctor.services.join('\n ')}
</Text>
</View>
<View>
  <Text style={styles.AText}> Available for consulting</Text>
<Text style={styles.doctorAvailability}> {selectedDoctor.availability.join('\n ')}</Text>

</View>
<CustomButton
            title="Book Appointment"
            onPress={() => {
              // Navigate to the appointment details screen
              Alert.alert('Feature Coming Soon')
            }}
            style = {styles.button}
          />




          {/* Display additional doctor details here */}
          <TouchableOpacity onPress={() => setSelectedDoctor(null)}>
            <Text style={styles.goBack}>Go Back</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          {filteredDoctors.map((doctor) => (
            <View style={{ width: `${100 / numColumns}%` }} key={doctor.id}>
              <TouchableOpacity onPress={() => handleDoctorPress(doctor)}>
                <View style={styles.doctorItem}>
                  <Image source={doctor.image} style={styles.doctorImage} />
                  <Text style={styles.doctorName}>{doctor.name}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  Dr:{
    fontSize:25,
    marginBottom:55,
    fontWeight:'bold',
  },
  header:{
    flex:1,
    flexDirection:'row',
    marginBottom:50,
  },
  sub2:{
    borderWidth:2,
    padding:10,
    width:'50%',
  },
  sub1:{
    width:"50%",
    // borderWidth:1,
  },
  searchInput: {
    borderWidth: 1,
    borderBottomColor: 'gray',
    borderTopColor:'white',
    // borderBottomColor:'white',
    borderLeftColor:'white',
    borderRightColor:'white',
    marginBottom: 10,
    marginTop: 25,
    padding: 8,
    textAlign: 'center',
  },
  doctorItem: {
    padding: 12,
    // marginBottom: 30,

  },
  doctorImage: {
    width: 50,
    height: 50,
    marginTop:50,
    // marginBottom: 8,
    marginLeft: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  doctorName: {
    textAlign: 'center',
    marginRight:10,
    
  },
  AText:{
    marginTop:50,
    fontSize:20,
    marginRight:150,
    
  },
  doctorDetailsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  selectedDoctorImage: {
    width: 50,
    height: 50,
    marginLeft:60,
    marginBottom: 8,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  Stext:{
    fontWeight:'bold',
    fontSize:40,
    marginTop: 20,
    marginBottom:10,
    marginRight:200,
  },
  selectedDoctorName: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  doctorServices: {
    fontSize: 20,
    marginTop: 10,
    marginLeft:10,
  },

  Services:{
    flex: 1, // Takes up the entire available horizontal space
    alignItems: 'flex-start', // Aligns the content to the left
    // marginLeft: 16, // Adjust the margin as needed
    // marginBottom:100,
    
    marginRight:150,
    height:100,
    width:200,
    borderWidth: 2,
  },
  
  doctorAvailability: {
    fontSize: 16,
    marginTop: 10,
    marginBottom:100,
  },
  goBack: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 16,
  },
});
