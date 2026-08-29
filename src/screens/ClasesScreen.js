import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, TextInput } from 'react-native';
import Card from '../components/Card';
import NivelFiltro from '../components/NivelFiltro';
import { spacing, colors, typography } from '../theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { CLASES, NIVELES } from '../data/clases';

const ClasesScreen = ({ navigation }) => {
  const [nivel, setNivel] = useState('Todos');
  const [busqueda, setBusqueda] = useState('');

  return (
    <View>
      <View>
        <Text>Aplicación de clases de inglés</Text>
        <View>
          <Ionicons name="search" size={18} />
          <TextInput
            placeholder="Buscar por nivel o profesor"
            value={busqueda}
            onChangeText={setBusqueda}
            autoCorrect={false}
            autoComplete="off"
          />
          {busqueda.length > 0 && (
            <Ionicons
              name="close-circle"
              size={18}
              onPress={() => setBusqueda('')}
            />
          )}
        </View>
        <ScrollView
          horizontal
          style={{ flexGrow: 0 }}
        >
          {NIVELES.map((item) => (
            <NivelFiltro
              key={item}
              etiqueta={item}
              activo={nivel === item}
              onPress={() => setNivel(item)}
            />
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={CLASES}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => <Card clase={item} />}
      />
    </View>
  );
};

export default ClasesScreen;