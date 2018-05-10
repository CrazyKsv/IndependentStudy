# Data Preprocessing

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

# Importing the dataset
dataset = pd.read_csv('Data.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, 3].values

# Taking care of missing data
from sklearn.preprocessing import Imputer
imputer = Imputer(missing_values = 'NaN', strategy = 'mean', axis = 0)
imputer = imputer.fit(X[:, 1:3])
X[:, 1:3] = imputer.transform(X[:, 1:3])

# categroy variable  - Country and Purchased
# Country : France Germany Spain
# Purchased : Yes No

from sklearn.preprocessing import LabelEncoder, OneHotEncoder
# Encode first col according to the data (Country into 0-Fr 1-Sp 2-Ger)
# Problem : Can't compare the country using 0 1 2. 
# Need to provide maching learning equation to make it think that Ger > Fr Sp > Ger | regarding to size
X_encoder = LabelEncoder()
X[:,0] = X_encoder.fit_transform(X[:,0])
# Do Dummy encoding 
onehotencoder = OneHotEncoder(categorical_features = [0])
X = onehotencoder.fit_transform(X).toarray()

# Encoding the Dependent Variable
y_encoder = LabelEncoder()
y = y_encoder.fit_transform(y)

#Split the data in to training/testing set
from sklearn.cross_validation import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X,y, test_size = 0.2, random_state=1)

# Feature Scaling
from sklearn.preprocessing import StandardScaler
X_sc = StandardScaler()

# Did not scale the dummpy variable
#X_train[:,3:] = X_sc.fit_transform(X_train[:,3:])
#X_test[:,3:] = X_sc.transform(X_test[:,3:])

# Scale the dummpy variable
X_train = X_sc.fit_transform(X_train)
X_test = X_sc.transform(X_test)

# NOTE :  Don't need to scale the dependent variable