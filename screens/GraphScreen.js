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

  async getFish() {
    try {
      const response = await fetch('http://proyecto-web.test/api/fish');
      const json = await response.json();
      this.setState({ data: json.fish });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getFish();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <ScrollView>

        <View style={{ flex: 1, padding: 10 , backgroundColor:'#D7F2B8' }}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            data.map((u, i) => {
              return (
                <Card key={i}>
                  <Card.Title>{u.name}</Card.Title>
                  <Card.Divider />
                  <View key={i} style={styles.user}>
                    <Text style={styles.name}>Magnitud: {u.size}</Text>
                    <Text style={styles.price}>Kind: {u.kind.name} </Text>
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

