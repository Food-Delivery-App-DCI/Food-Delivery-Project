export const restaurants = [
  {
    basicInfo: {
      businessName: "Sabor do Brasil",
      businessId: "23/456/78901",
      coverImage:
        "https://img.freepik.com/free-vector/beautiful-vintage-restaurant-facade_23-2147635517.jpg?t=st=1722937567~exp=1722941167~hmac=bfc674eac2d353dc0d787456c3b7e6578591625bba4f1991e05273a11f8cef0e&w=1060",
      owner: "Ana Souza",
      venueName: "Sabor",
      contact: {
        email: "ana@sabordobrasil.com",
        phoneNumber: "+49 170 1234567",
      },
      address: {
        street: "Adenauerallee 45",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10557",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.sabordobrasil.com/photos/restaurant1.jpg",
        "https://www.sabordobrasil.com/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/sabordobrasil",
        instagram: "http://www.instagram.com/sabordobrasil",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
            { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
            { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
            { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Brasil Gourmet",
      businessId: "23/456/78902",
      coverImage:
        "https://img.freepik.com/free-vector/beautiful-vintage-restaurant-facade_23-2147635517.jpg?t=st=1722937567~exp=1722941167~hmac=bfc674eac2d353dc0d787456c3b7e6578591625bba4f1991e05273a11f8cef0e&w=1060",
      owner: "Carlos Oliveira",
      venueName: "Brasil Gourmet",
      contact: {
        email: "carlos@brasilgourmet.de",
        phoneNumber: "+49 170 2345678",
      },
      address: {
        street: "Alexanderplatz 1",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10178",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.brasilgourmet.de/photos/restaurant1.jpg", "https://www.brasilgourmet.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/brasilgourmet",
        instagram: "http://www.instagram.com/brasilgourmet",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
            { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
            { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
            { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Churrascaria do Brasil",
      businessId: "23/456/78903",
      coverImage:
        "https://img.freepik.com/free-vector/beautiful-vintage-restaurant-facade_23-2147635517.jpg?t=st=1722937567~exp=1722941167~hmac=bfc674eac2d353dc0d787456c3b7e6578591625bba4f1991e05273a11f8cef0e&w=1060",
      owner: "Ricardo Costa",
      venueName: "Churrascaria",
      contact: {
        email: "ricardo@churrascarianobrasil.de",
        phoneNumber: "+49 170 3456789",
      },
      address: {
        street: "Graf-Adolf-Platz 15",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40213",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.churrascarianobrasil.de/photos/restaurant1.jpg",
        "https://www.churrascarianobrasil.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/churrascarianobrasil",
        instagram: "http://www.instagram.com/churrascarianobrasil",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
            { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
            { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
            { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Carioca Grill",
      businessId: "23/456/78904",
      coverImage:
        "https://img.freepik.com/free-vector/beautiful-vintage-restaurant-facade_23-2147635517.jpg?t=st=1722937567~exp=1722941167~hmac=bfc674eac2d353dc0d787456c3b7e6578591625bba4f1991e05273a11f8cef0e&w=1060",
      owner: "Fernanda Lima",
      venueName: "Carioca",
      contact: {
        email: "fernanda@cariocagrill.de",
        phoneNumber: "+49 170 4567890",
      },
      address: {
        street: "Marktplatz 2",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "230159",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.cariocagrill.de/photos/restaurant1.jpg", "https://www.cariocagrill.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/cariocagrill",
        instagram: "http://www.instagram.com/cariocagrill",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
            { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
            { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
            { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ginga Restaurant",
      businessId: "23/456/78905",
      coverImage:
        "https://img.freepik.com/free-vector/beautiful-vintage-restaurant-facade_23-2147635517.jpg?t=st=1722937567~exp=1722941167~hmac=bfc674eac2d353dc0d787456c3b7e6578591625bba4f1991e05273a11f8cef0e&w=1060",
      owner: "Luana Silva",
      venueName: "Ginga",
      contact: {
        email: "luana@gingarestaurant.de",
        phoneNumber: "+49 170 5678901",
      },
      address: {
        street: "Kurfürstendamm 80",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10709",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.gingarestaurant.de/photos/restaurant1.jpg",
        "https://www.gingarestaurant.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/gingarestaurant",
        instagram: "http://www.instagram.com/gingarestaurant",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
            { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
            { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
            { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Acarajé & Co.",
      businessId: "23/456/78906",
      coverImage:
        "https://img.freepik.com/free-vector/beautiful-vintage-restaurant-facade_23-2147635517.jpg?t=st=1722937567~exp=1722941167~hmac=bfc674eac2d353dc0d787456c3b7e6578591625bba4f1991e05273a11f8cef0e&w=1060",
      owner: "Mariana Almeida",
      venueName: "Acarajé",
      contact: {
        email: "mariana@acarajeandco.de",
        phoneNumber: "+49 170 6789012",
      },
      address: {
        street: "Friedrichstraße 50",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10117",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.acarajeandco.de/photos/restaurant1.jpg", "https://www.acarajeandco.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/acarajeandco",
        instagram: "http://www.instagram.com/acarajeandco",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
            { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
            { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
            { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Sabor Brasileiro",
      businessId: "23/456/78907",
      coverImage:
        "https://img.freepik.com/free-vector/beautiful-vintage-restaurant-facade_23-2147635517.jpg?t=st=1722937567~exp=1722941167~hmac=bfc674eac2d353dc0d787456c3b7e6578591625bba4f1991e05273a11f8cef0e&w=1060",
      owner: "Ana Costa",
      venueName: "Sabor",
      contact: {
        email: "ana@saborbrasileiro.de",
        phoneNumber: "+49 170 7890123",
      },
      address: {
        street: "Steinstraße 20",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40210",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.saborbrasileiro.de/photos/restaurant1.jpg",
        "https://www.saborbrasileiro.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/saborbrasileiro",
        instagram: "http://www.instagram.com/saborbrasileiro",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
            { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
            { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
            { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Delícia Brasileira",
      businessId: "23/456/78908",
      owner: "Carlos Fernandes",
      venueName: "Delícia",
      contact: {
        email: "carlos@deliciabrasileira.de",
        phoneNumber: "+49 170 7890124",
      },
      address: {
        street: "Markt 10",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.deliciabrasileira.de/photos/restaurant1.jpg",
        "https://www.deliciabrasileira.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/deliciabrasileira",
        instagram: "http://www.instagram.com/deliciabrasileira",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
            { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
            { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
            { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Café do Brasil",
      businessId: "23/456/78909",
      owner: "Jorge Almeida",
      venueName: "Café",
      contact: {
        email: "jorge@cafedobrasil.de",
        phoneNumber: "+49 170 8901234",
      },
      address: {
        street: "Karl-Liebknecht-Straße 10",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04107",
      },
    },
    openAndCloseHours: {
      monday: "8:00 AM - 8:00 PM",
      tuesday: "8:00 AM - 8:00 PM",
      wednesday: "8:00 AM - 8:00 PM",
      thursday: "8:00 AM - 8:00 PM",
      friday: "8:00 AM - 9:00 PM",
      saturday: "9:00 AM - 9:00 PM",
      sunday: "9:00 AM - 7:00 PM",
    },
    cuisine: ["Brazilian"],
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.cafedobrasil.de/photos/restaurant1.jpg", "https://www.cafedobrasil.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/cafedobrasil",
        instagram: "http://www.instagram.com/cafedobrasil",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
            { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
            { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
            { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Sabor do Brasil",
      businessId: "23/456/78910",
      owner: "Mariana Lima",
      venueName: "Sabor",
      contact: {
        email: "mariana@sabordobrasil.de",
        phoneNumber: "+49 170 8901235",
      },
      address: {
        street: "Raschplatz 7",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30161",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.sabordobrasil.de/photos/restaurant1.jpg", "https://www.sabordobrasil.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/sabordobrasil",
        instagram: "http://www.instagram.com/sabordobrasil",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
            { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
            { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
            { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Zagreb Bistro",
      businessId: "01/234/56789",
      owner: "Ana Kovačić",
      venueName: "Zagreb",
      contact: {
        email: "ana@zagreb-bistro.de",
        phoneNumber: "+49 170 1234567",
      },
      address: {
        street: "Kaiserstraße 10",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10707",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.zagreb-bistro.de/photos/restaurant1.jpg", "https://www.zagreb-bistro.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/zagreb-bistro",
        instagram: "http://www.instagram.com/zagreb-bistro",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Pršut", description: "Cured ham served with cheese", price: 3.0 },
            { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
            { name: "Krempita", description: "Custard cream pie", price: 3.0 },
            { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Dubrovnik Delights",
      businessId: "01/234/56790",
      owner: "Ivana Petrović",
      venueName: "Dubrovnik",
      contact: {
        email: "ivana@dubrovnikdelights.de",
        phoneNumber: "+49 170 2345678",
      },
      address: {
        street: "Königsallee 20",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40212",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.dubrovnikdelights.de/photos/restaurant1.jpg",
        "https://www.dubrovnikdelights.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/dubrovnikdelights",
        instagram: "http://www.instagram.com/dubrovnikdelights",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
            { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
            { name: "Krempita", description: "Custard cream pie", price: 3.0 },
            { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Split Supremacy",
      businessId: "01/234/56791",
      owner: "Marko Jurić",
      venueName: "Split",
      contact: {
        email: "marko@split-supremacy.de",
        phoneNumber: "+49 170 3456789",
      },
      address: {
        street: "Georgstraße 10",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30159",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.splitsupremacy.de/photos/restaurant1.jpg",
        "https://www.splitsupremacy.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/splitsupremacy",
        instagram: "http://www.instagram.com/splitsupremacy",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
            { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
            { name: "Krempita", description: "Custard cream pie", price: 3.0 },
            { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Rijeka Restaurant",
      businessId: "01/234/56792",
      owner: "Luka Novak",
      venueName: "Rijeka",
      contact: {
        email: "luka@rijekarestaurant.de",
        phoneNumber: "+49 170 4567890",
      },
      address: {
        street: "Berliner Allee 20",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40212",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.rijekarestaurant.de/photos/restaurant1.jpg",
        "https://www.rijekarestaurant.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/rijekarestaurant",
        instagram: "http://www.instagram.com/rijekarestaurant",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Pršut", description: "Cured ham served with cheese", price: 3.0 },
            { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
            { name: "Krempita", description: "Custard cream pie", price: 3.0 },
            { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Osijek Oasis",
      businessId: "01/234/56793",
      owner: "Jelena Kolić",
      venueName: "Osijek",
      contact: {
        email: "jelena@osijek-oasis.de",
        phoneNumber: "+49 170 5678901",
      },
      address: {
        street: "Petersstraße 50",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.osijek-oasis.de/photos/restaurant1.jpg", "https://www.osijek-oasis.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/osijek-oasis",
        instagram: "http://www.instagram.com/osijek-oasis",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Pršut", description: "Cured ham served with cheese", price: 3.0 },
            { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
            { name: "Krempita", description: "Custard cream pie", price: 3.0 },
            { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Pula Plate",
      businessId: "01/234/56794",
      owner: "Petra Šarić",
      venueName: "Pula",
      contact: {
        email: "petra@pulaplate.de",
        phoneNumber: "+49 170 6789012",
      },
      address: {
        street: "Friedrichstraße 76",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10117",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.pulaplate.de/photos/restaurant1.jpg", "https://www.pulaplate.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/pulaplate",
        instagram: "http://www.instagram.com/pulaplate",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
            { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
            { name: "Krempita", description: "Custard cream pie", price: 3.0 },
            { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Dubrovnik Delights",
      businessId: "01/234/56795",
      owner: "Ivana Petrović",
      venueName: "Dubrovnik",
      contact: {
        email: "ivana@dubrovnik-delights.de",
        phoneNumber: "+49 170 7890123",
      },
      address: {
        street: "Schadowstraße 75",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "4021",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.dubrovnikdelights.de/photos/restaurant1.jpg",
        "https://www.dubrovnikdelights.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/dubrovnikdelights",
        instagram: "http://www.instagram.com/dubrovnikdelights",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
            { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
            { name: "Krempita", description: "Custard cream pie", price: 3.0 },
            { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Zagreb Zest",
      businessId: "01/234/56796",
      owner: "Ana Horvat",
      venueName: "Zagreb",
      contact: {
        email: "ana@zagrebzest.de",
        phoneNumber: "+49 170 7890124",
      },
      address: {
        street: "Lister Meile 37",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30161",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.zagrebzest.de/photos/restaurant1.jpg", "https://www.zagrebzest.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/zagrebzest",
        instagram: "http://www.instagram.com/zagrebzest",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Pršut", description: "Cured ham served with cheese", price: 3.0 },
            { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
            { name: "Krempita", description: "Custard cream pie", price: 3.0 },
            { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Accra Delight",
      businessId: "01/234/56780",
      owner: "Kwame Mensah",
      venueName: "Accra",
      contact: {
        email: "kwame@accradelight.de",
        phoneNumber: "+49 170 1234567",
      },
      address: {
        street: "Grimmaische Straße 25",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.5 },
          { name: "Chinchinga", description: "Grilled beef kebabs", price: 6.0 },
          { name: "Banku and Tilapia", description: "Fermented maize dough with grilled fish", price: 7.5 },
          { name: "Fufu", description: "Pounded yam with soup", price: 6.5 },
          { name: "Gari Fortor", description: "Spicy cassava granules", price: 5.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spiced rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Waakye", description: "Rice and beans served with fried plantains", price: 11.0 },
          { name: "Kenkey and Fish", description: "Corn dough with grilled fish", price: 13.0 },
          { name: "Groundnut Soup", description: "Peanut soup with meat or fish", price: 14.0 },
          { name: "Kontomire Stew", description: "Leafy green stew with meat", price: 12.5 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Milo", description: "Chocolate malt drink", price: 4.0 },
          { name: "Bofrot", description: "Fried dough balls", price: 3.5 },
          { name: "Puff Puff", description: "Sweet fried dough balls", price: 3.0 },
          { name: "Kelewele Cake", description: "Cake made from spicy plantains", price: 4.5 },
          { name: "Fruit Salad", description: "Fresh fruit mix with honey", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Sobolo", description: "Hibiscus tea drink", price: 4.5 },
          { name: "Palm Wine", description: "Traditional Ghanaian palm wine", price: 5.5 },
          { name: "Pito", description: "Traditional Ghanaian millet beer", price: 6.0 },
          { name: "Zobo", description: "Hibiscus and ginger drink", price: 4.0 },
          { name: "Ginger Beer", description: "Homemade ginger drink", price: 3.5 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.accradelight.de/photos/restaurant1.jpg", "https://www.accradelight.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/accradelight",
        instagram: "http://www.instagram.com/accradelight",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Kelewele", description: "Spicy fried plantains", price: 3.0 },
            { name: "Jollof Rice", description: "Spiced rice cooked with tomatoes and vegetables", price: 11.0 },
            { name: "Puff Puff", description: "Sweet fried dough balls", price: 3.0 },
            { name: "Sobolo", description: "Hibiscus tea drink", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Accra Delight",
      businessId: "01/234/56780",
      owner: "Kwame Mensah",
      venueName: "Accra",
      contact: {
        email: "kwame@accradelight.de",
        phoneNumber: "+49 170 1234567",
      },
      address: {
        street: "Bernauer Straße 111",
        city: "Berlin",
        state: "Berlin",
        postalCode: "13355",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.0 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Banku and Tilapia", description: "Corn dough served with grilled tilapia", price: 15.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Light Soup", description: "Tomato-based soup with meat", price: 14.0 },
          { name: "Fufu and Groundnut Soup", description: "Cassava dough with peanut soup", price: 16.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.0 },
          { name: "Pineapple Upside Down Cake", description: "Pineapple cake with caramel", price: 5.5 },
          { name: "Coconut Candy", description: "Sweet coconut candy", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.5 },
          { name: "Coconut Water", description: "Refreshing coconut water", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.accradelight.de/photos/restaurant1.jpg", "https://www.accradelight.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/accradelight",
        instagram: "http://www.instagram.com/accradelight",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Kelewele", description: "Spicy fried plantains", price: 3.0 },
            { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 11.0 },
            { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 3.0 },
            { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghana Taste",
      businessId: "02/345/67891",
      owner: "Ama Ababio",
      venueName: "Ghana Taste",
      contact: {
        email: "ama@ghanataste.de",
        phoneNumber: "+49 160 2345678",
      },
      address: {
        street: "Heinrich-Heine-Allee 51",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40213",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.5 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 5.0 },
          { name: "Meat Pie", description: "Savory pie filled with spiced meat", price: 6.0 },
          { name: "Fish Cakes", description: "Deep-fried fish cakes", price: 5.5 },
          { name: "Pepper Soup", description: "Spicy soup with fish", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Jollof Rice with Chicken", description: "Spicy rice with grilled chicken", price: 14.0 },
          { name: "Fufu with Light Soup", description: "Cassava dough with tomato-based soup", price: 15.0 },
          { name: "Gari and Beans", description: "Gari served with beans", price: 12.0 },
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Plantain Cake", description: "Sweet plantain-based cake", price: 5.0 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.5 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Mango Pudding", description: "Creamy mango pudding", price: 4.5 },
          { name: "Chocolate Brownies", description: "Rich and fudgy brownies", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Fresh Mango Juice", description: "Juice made from fresh mangoes", price: 4.0 },
          { name: "Beer", description: "Local Ghanaian beer", price: 5.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Sobolo", description: "Hibiscus tea", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.ghanataste.de/photos/restaurant2.jpg", "https://www.ghanataste.de/photos/dish2.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanataste",
        instagram: "http://www.instagram.com/ghanataste",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 3.0 },
            { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 11.0 },
            { name: "Mango Pudding", description: "Creamy mango pudding", price: 3.0 },
            { name: "Fresh Mango Juice", description: "Juice made from fresh mangoes", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €15 spent. Redeem 50 points for a €10 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghana Gourmet",
      businessId: "03/456/78902",
      owner: "Kwesi Adom",
      venueName: "Ghana Gourmet",
      contact: {
        email: "kwesi@ghanagourmet.de",
        phoneNumber: "+49 170 3456789",
      },
      address: {
        street: "Schlossstraße 45",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10785",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.5 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
          { name: "Fish Cakes", description: "Deep-fried fish cakes", price: 5.5 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.0 },
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.5 },
          { name: "Fufu with Groundnut Soup", description: "Cassava dough with peanut soup", price: 15.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.5 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.5 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Juice", description: "Freshly squeezed fruit juice", price: 3.5 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.ghanagourmet.de/photos/restaurant3.jpg", "https://www.ghanagourmet.de/photos/dish3.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanagourmet",
        instagram: "http://www.instagram.com/ghanagourmet",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Chinchinga", description: "Spicy kebabs", price: 3.0 },
            { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 11.0 },
            { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 3.0 },
            { name: "Fresh Juice", description: "Freshly squeezed fruit juice", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €20 spent. Redeem 50 points for a €10 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Accra Bistro",
      businessId: "04/567/89013",
      owner: "Esi Kwaku",
      venueName: "Accra Bistro",
      contact: {
        email: "esi@accrabistro.de",
        phoneNumber: "+49 160 4567890",
      },
      address: {
        street: "Königstraße 34",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30175",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.0 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.5 },
          { name: "Fish Cakes", description: "Deep-fried fish cakes", price: 5.5 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.0 },
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.5 },
          { name: "Fufu with Groundnut Soup", description: "Cassava dough with peanut soup", price: 15.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Plantain Cake", description: "Sweet plantain-based cake", price: 5.0 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.5 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Mango Pudding", description: "Creamy mango pudding", price: 4.5 },
          { name: "Chocolate Brownies", description: "Rich and fudgy brownies", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.accrabistro.de/photos/restaurant4.jpg", "https://www.accrabistro.de/photos/dish4.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/accrabistro",
        instagram: "http://www.instagram.com/accrabistro",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Kelewele", description: "Spicy fried plantains", price: 3.0 },
            { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 11.0 },
            { name: "Mango Pudding", description: "Creamy mango pudding", price: 3.0 },
            { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €12 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghana Flavors",
      businessId: "05/678/90124",
      owner: "Daniel Appiah",
      venueName: "Ghana Flavors",
      contact: {
        email: "daniel@ghanaflavors.de",
        phoneNumber: "+49 170 5678901",
      },
      address: {
        street: "Prager Straße 50",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04317",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.5 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
          { name: "Pepper Soup", description: "Spicy soup with fish", price: 5.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.0 },
          { name: "Fufu with Light Soup", description: "Cassava dough with tomato-based soup", price: 15.0 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.0 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.5 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.5 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.5 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.ghanaflavors.de/photos/restaurant5.jpg", "https://www.ghanaflavors.de/photos/dish5.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanaflavors",
        instagram: "http://www.instagram.com/ghanaflavors",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 3.0 },
            { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 11.0 },
            { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 3.0 },
            { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €15 spent. Redeem 50 points for a €10 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghanaian Delight",
      businessId: "06/789/01235",
      owner: "Kwame Osei",
      venueName: "Ghanaian Delight",
      contact: {
        email: "kwame@ghanaian-delight.de",
        phoneNumber: "+49 160 6789012",
      },
      address: {
        street: "Karl-Marx-Allee 34",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10178",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.5 },
          { name: "Pepper Soup", description: "Spicy soup with fish", price: 5.0 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Fufu with Groundnut Soup", description: "Cassava dough with peanut soup", price: 15.0 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Plantain Cake", description: "Sweet plantain-based cake", price: 5.0 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.5 },
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.ghanaian-delight.de/photos/restaurant6.jpg",
        "https://www.ghanaian-delight.de/photos/dish6.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanaian-delight",
        instagram: "http://www.instagram.com/ghanaian-delight",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 3.0 },
            { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 11.0 },
            { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 3.0 },
            { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Kumasi Kitchen",
      businessId: "07/890/12346",
      owner: "Akosua Nkrumah",
      venueName: "Kumasi Kitchen",
      contact: {
        email: "akosua@kumasikitchen.de",
        phoneNumber: "+49 170 7890123",
      },
      address: {
        street: "August-Bebel-Straße 48",
        city: "Dusseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40227",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.5 },
          { name: "Pepper Soup", description: "Spicy soup with fish", price: 5.0 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Fufu with Groundnut Soup", description: "Cassava dough with peanut soup", price: 15.0 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Plantain Cake", description: "Sweet plantain-based cake", price: 5.0 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.5 },
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.kumasikitchen.de/photos/restaurant7.jpg", "https://www.kumasikitchen.de/photos/dish7.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/kumasikitchen",
        instagram: "http://www.instagram.com/kumasikitchen",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 3.0 },
            { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 11.0 },
            { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 3.0 },
            { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €20 spent. Redeem 50 points for a €10 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghana Grill",
      businessId: "08/901/23457",
      owner: "Ellen Akonor",
      venueName: "Ghana Grill",
      contact: {
        email: "ellen@ghanagrill.de",
        phoneNumber: "+49 160 8901234",
      },
      address: {
        street: "Oberbaumstraße 70",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04103",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.0 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.5 },
          { name: "Fish Cakes", description: "Deep-fried fish cakes", price: 5.5 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.0 },
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.5 },
          { name: "Fufu with Groundnut Soup", description: "Cassava dough with peanut soup", price: 15.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Plantain Cake", description: "Sweet plantain-based cake", price: 5.0 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.5 },
          { name: "Chocolate Brownies", description: "Rich and fudgy brownies", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Juice", description: "Freshly squeezed fruit juice", price: 3.5 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.ghanagrill.de/photos/restaurant8.jpg", "https://www.ghanagrill.de/photos/dish8.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanagrill",
        instagram: "http://www.instagram.com/ghanagrill",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Kelewele", description: "Spicy fried plantains", price: 3.0 },
            { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 11.0 },
            { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 3.0 },
            { name: "Fresh Juice", description: "Freshly squeezed fruit juice", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghana Savory",
      businessId: "09/012/34568",
      owner: "Kofi Asante",
      venueName: "Ghana Savory",
      contact: {
        email: "kofi@ghanasavory.de",
        phoneNumber: "+49 170 9012345",
      },
      address: {
        street: "Schönhauser Allee 101",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10439",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.5 },
          { name: "Pepper Soup", description: "Spicy soup with fish", price: 5.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Fufu with Groundnut Soup", description: "Cassava dough with peanut soup", price: 15.0 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.0 },
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Mango Pudding", description: "Creamy mango pudding", price: 4.5 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.5 },
          { name: "Plantain Cake", description: "Sweet plantain-based cake", price: 5.0 },
          { name: "Chocolate Brownies", description: "Rich and fudgy brownies", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.ghanasavory.de/photos/restaurant9.jpg", "https://www.ghanasavory.de/photos/dish9.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanasavory",
        instagram: "http://www.instagram.com/ghanasavory",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 3.0 },
            { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 11.0 },
            { name: "Mango Pudding", description: "Creamy mango pudding", price: 3.0 },
            { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €15 spent. Redeem 50 points for a €10 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghana Feast",
      businessId: "10/123/45679",
      owner: "Grace Ankomah",
      venueName: "Ghana Feast",
      contact: {
        email: "grace@ghanafeast.de",
        phoneNumber: "+49 160 0123456",
      },
      address: {
        street: "Podbielskistraße 200",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30177",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Pepper Soup", description: "Spicy soup with fish", price: 5.0 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.5 },
          { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.5 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Fufu with Groundnut Soup", description: "Cassava dough with peanut soup", price: 15.0 },
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.0 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Plantain Cake", description: "Sweet plantain-based cake", price: 5.0 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.5 },
          { name: "Chocolate Brownies", description: "Rich and fudgy brownies", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.5 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.ghanafeast.de/photos/restaurant10.jpg", "https://www.ghanafeast.de/photos/dish10.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanafeast",
        instagram: "http://www.instagram.com/ghanafeast",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 3.0 },
            { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 11.0 },
            { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 3.0 },
            { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €12 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Taste",
      businessId: "01/234/56789",
      owner: "Arben Doda",
      venueName: "Albanian Taste",
      contact: {
        email: "info@albanian-taste.de",
        phoneNumber: "+49 170 2345678",
      },
      address: {
        street: "Königstraße 34",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30175",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    restaurantType: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.5 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 7.0 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 6.5 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.0 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.0 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.0 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.0 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.0 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.5 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.0 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.5 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.0 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.5 },
          { name: "Coke", description: "Classic soft drink", price: 2.5 },
          { name: "Beer", description: "Selection of local beers", price: 4.0 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.albanian-taste.de/photos/restaurant1.jpg",
        "https://www.albanian-taste.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-taste",
        instagram: "http://www.instagram.com/albanian-taste",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 3.0 },
            { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 11.0 },
            { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.0 },
            { name: "Coke", description: "Classic soft drink", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Grill",
      businessId: "02/345/67890",
      owner: "Elira Leka",
      venueName: "Albanian Grill",
      contact: {
        email: "contact@albanian-grill.de",
        phoneNumber: "+49 160 3456789",
      },
      address: {
        street: "Friedrichstraße 20",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10117",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    restaurantType: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 5.0 },
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 6.0 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.5 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 6.5 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 11.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.0 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 12.0 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 12.0 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.0 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.5 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.0 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.5 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.0 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.5 },
          { name: "Coke", description: "Classic soft drink", price: 2.5 },
          { name: "Beer", description: "Selection of local beers", price: 4.0 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.albanian-grill.de/photos/restaurant2.jpg",
        "https://www.albanian-grill.de/photos/dish2.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-grill",
        instagram: "http://www.instagram.com/albanian-grill",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 3.0 },
            { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 11.0 },
            { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.0 },
            { name: "Coke", description: "Classic soft drink", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €15 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Tirana Delights",
      businessId: "03/456/78901",
      owner: "Besnik Cani",
      venueName: "Tirana Delights",
      contact: {
        email: "contact@tirana-delights.de",
        phoneNumber: "+49 170 4567890",
      },
      address: {
        street: "Wilhelmstraße 32",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10963",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    restaurantType: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.5 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 6.5 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 5.0 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.5 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.0 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.0 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.0 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.0 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.5 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.0 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.5 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.0 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.5 },
          { name: "Coke", description: "Classic soft drink", price: 2.5 },
          { name: "Beer", description: "Selection of local beers", price: 4.0 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.tirana-delights.de/photos/restaurant3.jpg",
        "https://www.tirana-delights.de/photos/dish3.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/tirana-delights",
        instagram: "http://www.instagram.com/tirana-delights",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 3.0 },
            { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 11.0 },
            { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.0 },
            { name: "Coke", description: "Classic soft drink", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €20 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Bistro",
      businessId: "04/567/89012",
      owner: "Flora Hoxha",
      venueName: "Albanian Bistro",
      contact: {
        email: "info@albanian-bistro.de",
        phoneNumber: "+49 170 5678901",
      },
      address: {
        street: "Kaiserswerther Straße 100",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40474",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    restaurantType: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.5 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 6.5 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 5.0 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.5 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.0 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.0 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.0 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.0 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.5 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.0 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.5 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.0 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.5 },
          { name: "Coke", description: "Classic soft drink", price: 2.5 },
          { name: "Beer", description: "Selection of local beers", price: 4.0 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.albanian-bistro.de/photos/restaurant4.jpg",
        "https://www.albanian-bistro.de/photos/dish4.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-bistro",
        instagram: "http://www.instagram.com/albanian-bistro",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 3.0 },
            { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 11.0 },
            { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.0 },
            { name: "Coke", description: "Classic soft drink", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €15 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Feast",
      businessId: "05/678/90123",
      owner: "Lina Nikollaj",
      venueName: "Albanian Feast",
      contact: {
        email: "info@albanian-feast.de",
        phoneNumber: "+49 170 6789012",
      },
      address: {
        street: "Berliner Allee 89",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40212",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    restaurantType: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.5 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 6.5 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 5.0 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.5 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.0 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.0 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.0 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.0 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.5 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.0 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.5 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.0 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.5 },
          { name: "Coke", description: "Classic soft drink", price: 2.5 },
          { name: "Beer", description: "Selection of local beers", price: 4.0 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.albanian-feast.de/photos/restaurant5.jpg",
        "https://www.albanian-feast.de/photos/dish5.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-feast",
        instagram: "http://www.instagram.com/albanian-feast",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 3.0 },
            { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 11.0 },
            { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.0 },
            { name: "Coke", description: "Classic soft drink", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €20 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Table",
      businessId: "06/789/01234",
      owner: "Genti Hoxha",
      venueName: "Albanian Table",
      contact: {
        email: "info@albanian-table.de",
        phoneNumber: "+49 170 7890123",
      },
      address: {
        street: "Ritterstraße 22",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    restaurantType: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.5 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 6.5 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 5.0 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.5 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.0 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.0 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.0 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.0 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.5 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.0 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.5 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.0 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.5 },
          { name: "Coke", description: "Classic soft drink", price: 2.5 },
          { name: "Beer", description: "Selection of local beers", price: 4.0 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.albanian-table.de/photos/restaurant6.jpg",
        "https://www.albanian-table.de/photos/dish6.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-table",
        instagram: "http://www.instagram.com/albanian-table",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 3.0 },
            { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 11.0 },
            { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.0 },
            { name: "Coke", description: "Classic soft drink", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €20 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Grill",
      businessId: "07/890/12345",
      owner: "Elira Gashi",
      venueName: "Albanian Grill",
      contact: {
        email: "info@albanian-grill.de",
        phoneNumber: "+49 170 8901234",
      },
      address: {
        street: "Hildesheimer Straße 236",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30519",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    restaurantType: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.5 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 6.5 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 5.0 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.5 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.0 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.0 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.0 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.0 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.5 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.0 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.5 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.0 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.5 },
          { name: "Coke", description: "Classic soft drink", price: 2.5 },
          { name: "Beer", description: "Selection of local beers", price: 4.0 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.albanian-grill.de/photos/restaurant7.jpg",
        "https://www.albanian-grill.de/photos/dish7.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-grill",
        instagram: "http://www.instagram.com/albanian-grill",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 3.0 },
            { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 11.0 },
            { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.0 },
            { name: "Coke", description: "Classic soft drink", price: 3.0 },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €20 spent. Redeem 50 points for a €5 discount.",
    },
  },
];
