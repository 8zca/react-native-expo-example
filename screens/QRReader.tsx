import React, { useEffect, useState } from "react"
import { Button, Dimensions, StyleSheet, TouchableOpacity } from "react-native"
import { Text, View } from "../components/Themed"
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner"
import BarcodeMask from "react-native-barcode-mask"

const finderWidth: number = 280
const finderHeight: number = 230
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
const viewMinX = (width - finderWidth) / 2
const viewMinY = (height - finderHeight) / 2

export default function QRCamera() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [scanned, setScanned] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === "granted")
    })()
  }, [])
  const handleBarCodeScanned = (scanningResult: BarCodeScannerResult) => {
    if (!scanned) {
      const { type, data, bounds: { origin } = {} } = scanningResult
      // @ts-ignore
      const { x, y } = origin
      if (
        x >= viewMinX &&
        y >= viewMinY &&
        x <= viewMinX + finderWidth / 2 &&
        y <= viewMinY + finderHeight / 2
      ) {
        setScanned(true)
        alert(`Bar code with type ${type} and data ${data} has been scanned!`)
      }
    }
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }
  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        type='back'
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >
        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
      </BarCodeScanner>
      {scanned && (
        <Button title="Scan Again" onPress={() => setScanned(false)} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})
