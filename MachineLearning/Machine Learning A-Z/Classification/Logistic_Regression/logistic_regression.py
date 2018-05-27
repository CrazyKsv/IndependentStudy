# Logistic Regression

# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

from sklearn.cross_validation import train_test_split
from sklearn.preprocessing import StandardScaler

from sklearn.linear_model import LogisticRegression

from matplotlib.colors import ListedColormap
FILE = 'Social_Network_Ads.csv'


# Importing the dataset
def preprocess(file, x_start, x_end, y_ind):
    
    dataset = pd.read_csv(file)
    # 2,3
    X = dataset.iloc[:, [x_start, x_end]].values
    # 4
    y = dataset.iloc[:, y_ind].values

    # Splitting the dataset into the Training set and Test set
    X_train, X_test, y_train, y_test = train_test_split(X, y, 
                                                        test_size = 0.25, 
                                                        random_state = 0)
    return X_train, X_test, y_train, y_test, X, y 


# Feature Scaling
def featureScaling(X_train, X_test):
    sc = StandardScaler()
    X_train = sc.fit_transform(X_train)
    X_test = sc.transform(X_test)
    return X_train, X_test, sc


def logisticRegression_train(classifier, X_train, y_train):
    classifier.fit(X_train, y_train)
    X_set, y_set = X_train, y_train
    X1, X2 = np.meshgrid(np.arange(start = X_set[:, 0].min() - 1, stop = X_set[:, 0].max() + 1, step = 0.01),
                         np.arange(start = X_set[:, 1].min() - 1, stop = X_set[:, 1].max() + 1, step = 0.01))
    plt.contourf(X1, X2, classifier.predict(np.array([X1.ravel(), X2.ravel()]).T).reshape(X1.shape),
                 alpha = 0.75, cmap = ListedColormap(('red', 'green')))
    plt.xlim(X1.min(), X1.max())
    plt.ylim(X2.min(), X2.max())
    for i, j in enumerate(np.unique(y_set)):
        plt.scatter(X_set[y_set == j, 0], X_set[y_set == j, 1],
                    c = ListedColormap(('red', 'green'))(i), label = j)
    plt.title('Logistic Regression (Training set)')
    plt.xlabel('Age')
    plt.ylabel('Estimated Salary')
    plt.legend()
    plt.show()
    return classifier
    pass


def logisticRegression_test(classifier, X_test, y_test):
    X_set, y_set = X_test, y_test
    X1, X2 = np.meshgrid(np.arange(start = X_set[:, 0].min() - 1, stop = X_set[:, 0].max() + 1, step = 0.01),
                         np.arange(start = X_set[:, 1].min() - 1, stop = X_set[:, 1].max() + 1, step = 0.01))
    plt.contourf(X1, X2, classifier.predict(np.array([X1.ravel(), X2.ravel()]).T).reshape(X1.shape),
                 alpha = 0.75, cmap = ListedColormap(('red', 'green')))
    plt.xlim(X1.min(), X1.max())
    plt.ylim(X2.min(), X2.max())
    for i, j in enumerate(np.unique(y_set)):
        plt.scatter(X_set[y_set == j, 0], X_set[y_set == j, 1],
                    c = ListedColormap(('red', 'green'))(i), label = j)
    plt.title('Logistic Regression (Test set)')
    plt.xlabel('Age')
    plt.ylabel('Estimated Salary')
    plt.legend()
    plt.show()
    
'''
Note: NEED to see how it works    
def classify(classifier, age, sal, sc):

    # Predicting result
    sc_new = StandardScaler()
    
    # need to scale the value first
    value = sc_new.fit_transform(np.array([[age],[sal]]))
    print(value)
    result = classifier.predict(value)
    # reverse the value to test data
    result = sc.inverse_transform(result)
    return result
'''
if __name__ == '__main__':
    X_train, X_test, y_train, y_test, X, y = preprocess(FILE, 2, 3, -1)
    X_train, X_test, sc = featureScaling(X_train, X_test)
    classifier = LogisticRegression(random_state = 0)
    classifier = logisticRegression_train(classifier, X_train, y_train)
    logisticRegression_test(classifier, X_test, y_test)

    
