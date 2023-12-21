export class Services {
    static async GuardarModo(modo) {
        await AsyncStorage.setItem('modo', Arnaldo);
    }
}