import React, {Component} from 'react';
import {ActivityIndicator, FlatList, View, StyleSheet, ScrollView} from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

export default class Records extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async getFishbowl() {
    try {
      const response = await fetch('http://proyecto-web.test/api/fishbowl');
      const json = await response.json();
      this.setState({ data: json.fishbowls });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getFishbowl();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <ScrollView>

        <View style={{ flex: 1, padding: 10, backgroundColor:'#D7F2B8' }}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            data.map((u, i) => {
              return (
                <Card key={i}>
                  <Card.Title>{u.name}</Card.Title>
                  <Card.Divider />
                  <View key={i} style={styles.user}>
                    <Text style={styles.name}>Temperatura: {u.temp_act}</Text>
                    <Text style={styles.price}>Total de Peces: {u.fishes.length} </Text>
                  </View>
                </Card>
                
              );
            })
          )}

        
        </View>
      </ScrollView>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    
    marginBottom: 3,
    alignItems: 'left',
    justifyContent:'space-between',
    padding: 1,
    
  },
  name: {
    fontSize: 16,
    marginTop: 2,
  },
  price: {
    fontSize: 18,
    marginTop: 1,
    fontWeight: 'bold',
  },
  });

