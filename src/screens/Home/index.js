import React, { useState } from 'react';

import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { request, PERMISSIONS } from 'react-native-permissions';

import Geolocation from '@react-native-community/geolocation';

import { Container } from './styles';

import {
	Scroller,

	HeaderArea,
	HeaderTitle,
	SearchButton,

	LocationArea,
	LocationInput,
	LocationFinder,

} from './styles';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {
    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');

    const [coords, setCoods] = useState(null);

    const handleLocationFinder = async () => {
        setCoods(null);
        let result = await request(
                Platform.OS === 'ios' ?
                    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                    :
                    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
            );

        if(result == 'granted') {

            Geolocation.getCurrentPosition((info)=>{
                console.log(info);
            });
        }

    }

    return (
        <Container>
        	<Scroller>

        		<HeaderArea>
        			<HeaderTitle numberOfLines={2}>Encontre seu barbeiro favorito</HeaderTitle>
        			<SearchButton onPress={()=>navigation.navigate('Search')}>
        				<SearchIcon width="26px" height="26px" fill="#FFFFFF" />
        			</SearchButton>
        		</HeaderArea>

        		<LocationArea>
        			<LocationInput 
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFFFFF"
                        value={locationText}
                        onChangeText={t=>setLocationText(t)}
                    />
        			<LocationFinder onPress={handleLocationFinder}>
        				<MyLocationIcon width="24px" height="24px" fill="#FFFFFF" />
                        </LocationFinder>
        		</LocationArea>


        	</Scroller>
        </Container>
    );
}
