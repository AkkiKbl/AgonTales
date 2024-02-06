import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { ViewPropTypes } from "deprecated-react-native-prop-types";

const Home = () => {
  const carouselData = [
    { id: "1", image: require("./assets/fire.jpg") },
    { id: "2", image: require("./assets/images.jpg") },
    {
      id: "3",
      image: require("./assets/sword-art-online-sao.png"),
    },
    { id: "4", image: require("./assets/Boruto.jpeg") },
  ];

  const menuData = [
    { id: "5", image: require("./assets/KK.jpeg") },
    { id: "6", image: require("./assets/DAYS.jpeg") },
    { id: "7", image: require("./assets/MHA.jpeg") },
    { id: "8", image: require("./assets/TT.jpeg") },
  ];

  // const renderItem = ({ item }) => {

  // };
  const renderMenuItems = () => {
    menuData.map((item) => (
      <TouchableOpacity key={item.id} style={styles.menuItem}>
        <Image source={item.image} style={styles.menuItemImage} />
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>AGON TALES</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText1}>For U</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Latest</Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* Carousel */}
        <Carousel
          data={carouselData}
          renderItem={(item) => {
            <View style={styles.carouselItem}>
              <Image
                source={item.image}
                style={styles.carouselImage}
                resizeMode="contain"
              />
            </View>;
          }}
          sliderWidth={300}
          sliderHeight={100}
          itemWidth={300}
          autoplay={true}
          autoplayInterval={3000}
          loop={true}
        />
      </View>

      {/* Horizontal Scroll Menu */}
      <Text style={styles.title}>TOP HOT</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.menuContainer}
      >
        {renderMenuItems()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    alignItems: "",
    alignSelf: "stretch",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "50%",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -180,
    marginTop: -20,
  },
  buttonText: {
    fontWeight: "bold",
    color: "purple",
  },
  buttonText1: {
    fontWeight: "bold",
    color: "purple",
    fontSize: 20,
  },

  carouselItem: {
    // backgroundColor: 'black',
    borderRadius: 8,
    overflow: "hidden",
    resizeMode: "contain",
    // marginRight: -190,
    // marginLeft: -10,
  },
  carouselImage: {
    width: 345,
    height: 193,
    resizeMode: "contain",
    // margin: 40,
  },
  title: {
    top: -210,
    marginLeft: -260,
    fontSize: 20,
    fontFamily: "Rajdhani-Bold.ttf",
  },

  menuContainer: {
    marginTop: -200,
    marginLeft: 10,
  },
  menuItem: {
    marginRight: 20,
    overflow: "hidden",
  },
  menuItemImage: {
    width: 100,
    height: 150,
  },
});

export default Home;
