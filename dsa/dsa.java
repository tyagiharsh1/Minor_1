import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class CitySearch {

    public static void main(String[] args) {
        // Connect to MongoDB (change the connection string accordingly)
        try (MongoClient mongoClient = MongoClients.create("mongodb://localhost:4000")) {
            MongoDatabase database = mongoClient.getDatabase("User");

            // Create a HashMap to store cities and their associated data
            Map<String, List<String>> cityData = createCityData();

            // Insert data into MongoDB
            insertCityDataIntoMongoDB(database, cityData);

            // Search for a city
            Scanner scanner = new Scanner(System.in);
            System.out.print("Enter a city to search: ");
            String searchTerm = scanner.nextLine().trim();
            searchCity(database, searchTerm);
        }
    }

    // Function to create sample city data
    private static Map<String, List<String>> createCityData() {
        // You can modify this function to read data from a file or any other source
        // This is just a sample data creation
        // ...

        return Map.of(
                "Lucknow", Arrays.asList("Data1 for"Lucknow", "Data2 for"Lucknow"),
                "Mumbai", Arrays.asList("Data1 for Mumbai", "Data2 for Mumbai"),
                "Dehradun", Arrays.asList("Data1 for Dehradun", "Data2 for Dehradun")
        );
    }

    // Function to insert city data into MongoDB
    private static void insertCityDataIntoMongoDB(MongoDatabase database, Map<String, List<String>> cityData) {
        MongoCollection<Document> cityCollection = database.getCollection("cities");

        for (Map.Entry<String, List<String>> entry : cityData.entrySet()) {
            Document cityDocument = new Document("city", entry.getKey())
                    .append("data", entry.getValue());

            cityCollection.insertOne(cityDocument);
        }
    }

    // Function to search for a city in MongoDB
    private static void searchCity(MongoDatabase database, String searchTerm) {
        MongoCollection<Document> cityCollection = database.getCollection("cities");

        Document cityDocument = cityCollection.find(new Document("city", searchTerm)).first();

        if (cityDocument != null) {
            // City found, print its data
            List<String> data = cityDocument.getList("data", String.class);
            System.out.println("City: " + searchTerm);
            System.out.println("Data:");
            for (String d : data) {
                System.out.println("- " + d);
            }
        } else {
            // City not found
            System.out.println("City not found: " + searchTerm);
        }
    }
}
