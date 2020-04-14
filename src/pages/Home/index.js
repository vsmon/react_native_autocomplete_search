import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Modal,
  Button,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const list = [
  {id: 1, name: 'Joao'},
  {id: 2, name: 'Maria'},
  {id: 3, name: 'Pedro'},
  {id: 4, name: 'Lia'},
  {id: 5, name: 'Marcia'},
  {id: 6, name: 'Joao'},
  {id: 7, name: 'Maria'},
  {id: 8, name: 'Pedro'},
  {id: 9, name: 'Lia'},
  {id: 10, name: 'Marcia'},
  {id: 11, name: 'Joao'},
  {id: 12, name: 'Maria'},
  {id: 13, name: 'Pedro'},
  {id: 14, name: 'Lia'},
  {id: 15, name: 'Marcia'},
  {id: 16, name: 'Joao'},
  {id: 17, name: 'Maria'},
  {id: 18, name: 'Pedro'},
  {id: 19, name: 'Lia'},
  {id: 20, name: 'Marcia'},
  {id: 21, name: 'Joao'},
  {id: 22, name: 'Maria'},
  {id: 23, name: 'Pedro'},
  {id: 24, name: 'Lia'},
  {id: 25, name: 'Marcia'},
  {id: 26, name: 'Joao'},
  {id: 27, name: 'Maria'},
  {id: 28, name: 'Pedro'},
  {id: 29, name: 'Lia'},
  {id: 30, name: 'Marcia'},
];

export default function Home() {
  const [text, setText] = useState('');
  const [data, setData] = useState(list);
  const [modalVisible, setModalVivible] = useState(false);
  const [name, setName] = useState();
  const [focuse, setFocuse] = useState(false);

  useEffect(() => {
    setFocuse(false);
  }, []);

  function filterItem(text) {
    setText(text);
    const itemFiltered = list.filter((item) => {
      return item.name.indexOf(text) > -1;
    });
    setData(itemFiltered);
    /* if (text === '') {
      setData([]);      
    } else {
      setModalVivible(true);
      setData(itemFiltered);
    } */
  }
  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#CCC',
        }}
      />
    );
  };
  return (
    <View
      style={{
        flex: 1,
        /*         justifyContent: 'center',
        alignItems: 'center', */
        backgroundColor: '#FF9',
      }}>
      <Text>Home</Text>

      {/* <Text
        style={{
          margin: 20,
          backgroundColor: '#FFF',
          borderRadius: 25,
          padding: 10,
          fontSize: 18,
        }}
        onPress={() => setModalVivible(true)}>
        <Icon name="search" size={20} color="#CCC" />
        {text}
      </Text> */}

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: '#FFF',
          padding: 10,
          borderRadius: 25,
          margin: 20,
        }}
        activeOpacity={1}
        onPress={() => setModalVivible(true)}>
        <Icon name="search" size={20} color="#CCC" />
        <Text style={{paddingLeft: 10}}>{text}</Text>
      </TouchableOpacity>

      <Modal transparent={false} visible={modalVisible}>
        <View
        /* style={{
            width: 300,
            height: 300,
          }} */
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 20,
            }}>
            <TouchableOpacity onPress={() => setModalVivible(false)}>
              <Icon name="arrow-back" size={20} color="#CCC" />
            </TouchableOpacity>

            <TextInput
              style={{backgroundColor: '#FFF', borderRadius: 5, margin: 5}}
              placeholder="Digite o nome"
              onChangeText={(text) => filterItem(text)}
              value={text}
            />
          </View>
          <FlatList
            ItemSeparatorComponent={FlatListItemSeparator}
            style={{backgroundColor: 'white'}}
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity
                    style={{flex: 1, padding: 10}}
                    onPress={() => {
                      setModalVivible(false);
                      setText(item.name);
                    }}>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item) => String(item.id)}
          />
        </View>
      </Modal>
    </View>
  );
}
