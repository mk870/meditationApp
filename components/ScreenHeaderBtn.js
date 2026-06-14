import { Image, TouchableOpacity, StyleSheet, View } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
import icons from "../constants/icons";
import { useRouter } from "expo-router";

const ScreenHeaderBtn = ({ detailPage, handleShare }) => {
  console.log(detailPage);

  const router = useRouter();

  return (
    <>
      <View style={styles.btn}>
        {/* Menu button — always navigates to home */}
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => router.push("/home")}
        >
          <Image source={icons.menu} style={styles.image} />
        </TouchableOpacity>

        {/* Share button (detail page) or Settings button (home page) */}
        {detailPage ? (
          <>
            <TouchableOpacity style={styles.btnContainer} onPress={handleShare}>
              <Image source={icons.share} style={styles.image} />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => router.push("/settings")}
            >
              <Image source={icons.settings} style={styles.image} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%", // using "100%" instead of "100vw" for React Native compatibility
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
});

export default ScreenHeaderBtn;