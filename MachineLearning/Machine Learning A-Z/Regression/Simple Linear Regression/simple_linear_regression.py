# Simple Linear Regression

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.cross_validation import train_test_split
from sklearn.linear_model import LinearRegression

def preprocess(file):
    """(str) -> (array, array, array, array)
    Preprocess the data and return training/testing data
    """    
    # Importing the dataset
    dataset = pd.read_csv(file)
    X = dataset.iloc[:, :-1].values
    y = dataset.iloc[:, 1].values

    # Splitting the dataset into the Training set and Test set
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 1/3, random_state = 1)
    return X_train, X_test, y_train, y_test


# Fitting Simple Linear Regression to the Training set
def linear_regression(file):
    # GET Preprocess data
    X_train, X_test, y_train, y_test = preprocess(file)
    
    # declare regressor
    regressor = LinearRegression()
    # Fit the training data to the regressor to train so that we can do prediction
    regressor.fit(X_train, y_train)

    # DO prediction based on the training 
    y_pred = regressor.predict(X_test)  # NOTE: This is the predicted salary base on the linear regression

    # Visualising the Training set results
    plt.scatter(X_train, y_train, color = 'red')
    plt.plot(X_train, regressor.predict(X_train), color = 'blue')
    plt.title('Salary vs Experience (Training set)')
    plt.xlabel('Years of Experience')
    plt.ylabel('Salary')
    plt.show()
    
    # Visualising the Test set results
    plt.scatter(X_test, y_test, color = 'red')
    plt.plot(X_train, regressor.predict(X_train), color = 'blue')
    plt.title('Salary vs Experience (Test set)')
    plt.xlabel('Years of Experience')
    plt.ylabel('Salary')
    plt.show()
    
    
    
if __name__ == '__main__':
    linear_regression('Salary_Data.csv')