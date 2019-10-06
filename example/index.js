
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioButtonRN from 'radio-buttons-react-native';

class App extends React.Component {

	constructor(props) {
        super(props);

        this.state = {
			res: {},
			example: 1
		};

		this.colors = [
			{
				label: 'red'
			},
			{
				label: 'green'
			},
			{
				label: 'blue'
			}
		];
		
		this._renderRadioBtn = this._renderRadioBtn.bind(this);
	}

	_renderRadioBtn() {
		let { example } = this.state;
		if (example === 1) {
			return (
				<RadioButtonRN
					data={this.colors}
					selectedBtn={(e) => this.setState({ res: e })}
					circleSize={16}
				/>
			)
		}
		else if (example === 2) {
			return (
				<RadioButtonRN
					data={this.colors}
					initial={1}
					box={false}
					selectedBtn={(e) => this.setState({ res: e })}
					circleSize={16}
				/>
			)
		}
		else if (example === 3) {
			return (
				<RadioButtonRN
					data={this.colors}
					initial={2}
					selectedBtn={(e) => this.setState({ res: e })}
					circleSize={16}
					icon={
						<Icon
							name="check-circle"
							size={25}
							color="#2c9dd1"
						/>
					}
				/>
			)
		}
		else if (example === 4) {
			return (
				<RadioButtonRN
					data={this.colors}
					animationTypes={['pulse']}
					initial={1}
					selectedBtn={(e) => this.setState({ res: e })}
					circleSize={16}
				/>
			)
		}
		else if (example === 5) {
			return (
				<RadioButtonRN
					data={this.colors}
					animationTypes={['zoomIn']}
					initial={2}
					box={false}
					selectedBtn={(e) => this.setState({ res: e })}
					circleSize={16}
					icon={
						<Icon
							name="rocket"
							size={25}
							color="#a82c3a"
						/>
					}
				/>
			)
		}
		else if (example === 6) {
			return (
				<RadioButtonRN
					data={this.colors}
					animationTypes={['shake']}
					initial={3}
					selectedBtn={(e) => this.setState({ res: e })}
					circleSize={16}
					icon={
						<Icon
							name="check-circle"
							size={25}
							color="#2c9dd1"
						/>
					}
				/>
			)
		}
		else if (example === 7) {
			return (
				<RadioButtonRN
					data={this.colors}
					animationTypes={['rotate']}
					initial={2}
					selectedBtn={(e) => this.setState({ res: e })}
					circleSize={16}
					icon={
						<Icon
							name="rocket"
							size={25}
							color="#2c9dd1"
						/>
					}
				/>
			)
		}
	}

	render() {
		let { example } = this.state;
		return (
			<View>
				
				<View style={{ margin: 10, flexDirection: 'row' }}>
					<TouchableOpacity
						activeOpacity={1}
						style={[styles.types, { backgroundColor: example === 1 ? '#ccc' : '#fff' }]}
						onPress={() => this.setState({ example: 1 })}
					>
						<Text>
							with Box
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						activeOpacity={1}
						style={[styles.types, { backgroundColor: example === 2 ? '#ccc' : '#fff' }]}
						onPress={() => this.setState({ example: 2 })}
					>
						<Text>
							without Box
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						activeOpacity={1}
						style={[styles.types, { backgroundColor: example === 3 ? '#ccc' : '#fff' }]}
						onPress={() => this.setState({ example: 3 })}
					>
						<Text>
							with Icon
						</Text>
					</TouchableOpacity>

				</View>

				<Text style={{ marginHorizontal: 10 }}>Animation: </Text>
				<View style={{ margin: 10, flexDirection: 'row' }}>
					<TouchableOpacity
						activeOpacity={1}
						style={[styles.types, { backgroundColor: example === 4 ? '#ccc' : '#fff' }]}
						onPress={() => this.setState({ example: 4 })}
					>
						<Text>
							pulse
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						activeOpacity={1}
						style={[styles.types, { backgroundColor: example === 5 ? '#ccc' : '#fff' }]}
						onPress={() => this.setState({ example: 5 })}
					>
						<Text>
							zoomIn
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						activeOpacity={1}
						style={[styles.types, { backgroundColor: example === 6 ? '#ccc' : '#fff' }]}
						onPress={() => this.setState({ example: 6 })}
					>
						<Text>
							shake
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						activeOpacity={1}
						style={[styles.types, { backgroundColor: example === 7 ? '#ccc' : '#fff' }]}
						onPress={() => this.setState({ example: 7 })}
					>
						<Text>
							rotate
						</Text>
					</TouchableOpacity>
				</View>


				<View style={{ top: 50, padding: 20 }}>
					<Text style={{ fontSize: 13 }}>
						Selected your color:
					</Text>

					{ this._renderRadioBtn() }
					
				</View>
				{
					this.state.res &&
						<View style={{ top: 100, width: '100%', alignItems: 'center' }}>
							<Text style={{ fontSize: 13 }}>
								Selected Color:
							</Text>
							<Text style={{ fontSize: 24, color: this.state.res.label }}>
								{this.state.res.label}
							</Text>
						</View>
				}

			</View>
		);
	}
};

const styles = StyleSheet.create({
	types: {
		marginHorizontal: 5,
		borderWidth: 1,
		borderColor: '#bbb',
		padding: 4,
		borderRadius: 3,
		backgroundColor: '#fff'
	}
});

export default App;
