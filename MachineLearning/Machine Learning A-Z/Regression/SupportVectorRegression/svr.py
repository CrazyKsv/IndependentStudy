# SVR

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
# Feature Scaling
from sklearn.preprocessing import StandardScaler
# regressor
from sklearn.svm import SVR

FILE = 'Position_Salaries.csv'


def preprocess(file, x_start, x_end, y_ind):
    
    dataset = pd.read_csv(file)
    X = dataset.iloc[:, x_start:x_end].values
    y = dataset.iloc[:, y_ind].values
    # need to scale the data if we use SVR for sklearn
    X, y, sc_X, sc_y = feature_scalar(X, y)
    return X, y, sc_X, sc_y


def feature_scalar(X, y):
    sc_X = StandardScaler()
    sc_y = StandardScaler()
    X = sc_X.fit_transform(X)
    y = sc_y.fit_transform(np.reshape(y, (-1,1)))
    return X, y, sc_X, sc_y

    
def supportVectorRegression(regressor, X, y):
    regressor.fit(X, y)
    # Visualising the SVR results (for higher resolution and smoother curve)
    X_grid = np.arange(min(X), max(X), 0.01) # choice of 0.01 instead of 0.1 step because the data is feature scaled
    X_grid = X_grid.reshape((len(X_grid), 1))
    plt.scatter(X, y, color = 'red')
    plt.plot(X_grid, regressor.predict(X_grid), color = 'blue')
    plt.title('Truth or Bluff (SVR)')
    plt.xlabel('Position level')
    plt.ylabel('Salary')
    plt.show()
    
    
def do_predict(regressor, predict_value, sc_X, sc_y):
       
    # Predicting result
    
    # need to scale the value first
    value = sc_X.transform(np.array([[predict_value]]))
    result = regressor.predict(value)
    # reverse the value to test data
    result = sc_y.inverse_transform(result)
    return result


if __name__ == '__main__':
    X, y, sc_X, sc_y = preprocess(FILE, 1, 2, -1)
    
    regressor = SVR(kernel='rbf')
    # visualising SVR
    supportVectorRegression(regressor, X, y)
    
    print(do_predict(regressor, 6.5, sc_X, sc_y))
    
    