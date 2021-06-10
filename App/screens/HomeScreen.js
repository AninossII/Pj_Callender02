import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import colors from '../config/colors';

const HomeScreen = () => {
    const vacation = {key: 'vacation', color: 'blue',selectedDotColor: 'red'};
    const messages = {key: 'messages', color: colors.primary,selectedDotColor: 'green'};
    const workout = {key: 'workout', color: 'gold',selectedDotColor: 'blue'};

    return (
        <SafeAreaView>
            <View>
                <Calendar
                    style={{
                        borderColor: 'gray',
                        borderBottomStartRadius: 15,
                        borderBottomEndRadius: 15,
                        shadowColor: 'black',
                        shadowOpacity: 0.9,
                        elevation: 10,
                        padding: 15
                    }}
                    renderItem={(item, firstItemInDay) => {return (<View />);}}
                    hideArrows={false}
                    onDayPress={(day) => {console.log('select day', day)}}
                    firstDay={1}
                    enableSwipeMonths={true}
                    
                    disabledDaysIndexes={[0, 6]}
                    markedDates={{
                        '2021-06-09': {selected:true, marked:true, selectedColor: colors.button,},
                        '2021-06-11': {marked: true, dotColor: colors.button},
                    }}
                    />
                
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
