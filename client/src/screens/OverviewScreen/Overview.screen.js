import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Dimensions } from 'react-native'
import { Container, View, Text, Button } from 'native-base'
import { LineChart } from 'react-native-chart-kit'

const Stack = createStackNavigator()

const OverviewScreen = () => {
  const [temp, randomize] = useState(0)

  return (
    <Stack.Navigator>
      <Stack.Screen name='Overview' options={{ title: 'Overview' }}>
        {() => {
          return (
            <Container>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text>Free Spins</Text>
                <LineChart
                  data={{
                    labels: ['8:00', '8:15', '8:30', '8:45', '9:00', '9:15'],
                    datasets: [
                      {
                        data: [
                          Math.floor(Math.random() * 100),
                          Math.floor(Math.random() * 100),
                          Math.floor(Math.random() * 100),
                          Math.floor(Math.random() * 100),
                          Math.floor(Math.random() * 100),
                          Math.floor(Math.random() * 100)
                        ]
                      }
                    ]
                  }}
                  width={Dimensions.get('window').width} // from react-native
                  height={220}
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 1
                    },
                    propsForDots: {
                      r: '6',
                      strokeWidth: '2',
                      stroke: '#ffa726'
                    }
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 0
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text>Jackpot</Text>
                <LineChart
                  data={{
                    labels: ['8:00', '8:15', '8:30', '8:45', '9:00', '9:15'],
                    datasets: [
                      {
                        data: [
                          Math.floor(Math.random() * 100),
                          Math.floor(Math.random() * 100),
                          Math.floor(Math.random() * 100),
                          Math.floor(Math.random() * 100),
                          Math.floor(Math.random() * 100),
                          Math.floor(Math.random() * 100)
                        ]
                      }
                    ]
                  }}
                  width={Dimensions.get('window').width} // from react-native
                  height={220}
                  yAxisInterval={1} // optional, defaults to 1
                  chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 1
                    },
                    propsForDots: {
                      r: '6',
                      strokeWidth: '2',
                      stroke: '#ffa726'
                    }
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 0
                  }}
                />
                <Button
                  onPress={() => {
                    randomize(temp => ++temp)
                  }}
                >
                  <Text>Randomize</Text>
                </Button>
              </View>
            </Container>
          )
        }}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default OverviewScreen
