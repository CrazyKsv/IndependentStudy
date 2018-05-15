# Multiple Linear Regression


# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.cross_validation import train_test_split
from sklearn.linear_model import LinearRegression
# Encoding categorical data
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
#  for backward elimination
import statsmodels.formula.api as sm

def preprocess(file):
    """(str) -> (array, array, array, array)
    Preprocess the data and return training/testing data
    """    
    # Importing the dataset
    dataset = pd.read_csv(file)
    X = dataset.iloc[:, :-1].values
    y = dataset.iloc[:, 4].values

    
    labelencoder = LabelEncoder()
    X[:, 3] = labelencoder.fit_transform(X[:, 3])
    onehotencoder = OneHotEncoder(categorical_features = [3])
    X = onehotencoder.fit_transform(X).toarray()
    
    # Avoiding the Dummy Variable Trap
    X = X[:, 1:]

    # Splitting the dataset into the Training set and Test set
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)
    return X_train, X_test, y_train, y_test, X, y


def mult_linear_reg(X_train, X_test, y_train, y_test):
    
    # declare regressor
    regressor = LinearRegression()
    # Fit the training data to the regressor to train so that we can do prediction
    regressor.fit(X_train, y_train)
    # DO prediction based on the training 
    y_pred = regressor.predict(X_test)  # NOTE: This is the predicted salary base on the linear regression
    
    
    return y_pred

def backwardElimination(x, y, sl):
    
    num_vars = len(x[0])
    for i in range(0, num_vars):
        regressor_OLS = sm.OLS(y, x).fit()
        max_p = max(regressor_OLS.pvalues).astype(float)
        # IF MAX P VALUE larger than significant value, remove variable and refit the model
        if max_p > sl:
            # doing remove, find the value first
            for j in range(0, num_vars - i):
                if regressor_OLS.pvalues[j].astype(float) == max_p:
                    x = np.delete(x,j,1)
    regressor_OLS.summary()
    return x



if __name__ == '__main__':
    X_train, X_test, y_train, y_test, X, y = preprocess("50_Startups.csv")
    prediction = mult_linear_reg(X_train, X_test, y_train, y_test)

    # backward eliminiation for new model
    X = np.append(arr=np.ones((len(X), 1)).astype(int), values=X, axis=1)
    X_opt = X[:,[*range(len(X[0]))]]
    new_model = backwardElimination(X_opt, y, 0.05)
    
    # redo regression
    X_train_2, X_test_2 = train_test_split(new_model, test_size = 0.2, random_state = 0)
    new_prediction = mult_linear_reg(X_train_2, X_test_2, y_train_2, y_test_2)