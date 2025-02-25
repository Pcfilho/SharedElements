import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('screen');
export const WIDTH = width / 2 - 35;

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    marginHorizontal: 25,
  },
  detailContainer: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: 25,
    height: 1000
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    marginTop: 8,
  },
  font28: {
    fontSize: 28,
  },
  chip: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: 90,
    borderRadius: 5,
    textAlign: 'center',
    marginRight: 8,
  },
  detailsImage: {
    width: '100%',
    height: 400,
  },
  callToActionWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  callToAction: {
    backgroundColor: '#add8e6',
    padding: 16,
    width: 250,
    borderRadius: 5,
  },
  callToActionText: {
    color: '#015571',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageOne: {
    width: '100%',
    height: 160,
    marginTop: 200,
    borderRadius: 15,
  },
  imageTwo: {
    height: 250,
    marginTop: 20,
    borderRadius: 15,
    width: WIDTH,
  },
  imageThree: {
    height: 250,
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 15,
    width: WIDTH,
  },
});