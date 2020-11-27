import React, { useState, useEffect } from 'react';

import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { request, PERMISSIONS } from 'react-native-permissions';

// import Geolocation from '@react-native-community/geolocation';

import { Container } from './styles';

import Api from '../../Api';

import {
	Scroller,

	HeaderArea,
	HeaderTitle,
	SearchButton,

	LocationArea,
	LocationInput,
	LocationFinder,

    LoadingIcon,
    ListArea,
} from './styles';

import BarberItem from '../../components/BarberItem';

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';

export default () => {
    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');

    const [loading, setLoading] = useState(false);

    const [list, setList] = useState([]);

    // const [coords, setCoords] = useState(null);

    // const handleLocationFinder = async () => {
    //     setCoords(null);
    //     let result = await request(
    //             Platform.OS === 'ios' ?
    //                 PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    //                 :
    //                 PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    //         );

    //     if(result == 'granted') {

    //          setLoading(true);
    //          setLocationText('');
    //          setList([]);

    //         Geolocation.getCurrentPosition((info)=>{
    //             setCoords(info.coords);
    //             getBarbers();
    //         });
    //     }

    // }

    const getBarbers = async () => {
        setLoading(true);
        setList([]);

        let res = await Api.getBarbers();
        // console.log(res);

        if(res.error == '') {
            if(res.loc) {
                setLocationText(res.loc);
            }

            setList(res.data);

        } else {
            alert("Erro: "+res.error);
        }

        setLoading(false);
    }

    useEffect(()=>{
        getBarbers();
    }, []);

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
        			<LocationFinder>
        				<MyLocationIcon width="24px" height="24px" fill="#FFFFFF" />
                        </LocationFinder>
        		</LocationArea>

                {loading && 
                <LoadingIcon size="large" color="#FFFFFF" />
            }

            <ListArea>
                {list.map((item, k)=>(
                    <BarberItem key={k} data={item} />
                ))}
            </ListArea>

        	</Scroller>
        </Container>
    );
}
