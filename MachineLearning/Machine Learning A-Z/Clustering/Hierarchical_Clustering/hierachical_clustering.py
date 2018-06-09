# Hierarchical Clustering

# Importing the libraries

import matplotlib.pyplot as plt
import pandas as pd

FILE = 'Mall_Customers.csv'

def preprocess(file, x_start, x_end):
    
    # Importing the dataset
    dataset = pd.read_csv('Mall_Customers.csv')
    X = dataset.iloc[:, x_start: x_end].values
    return X


# Using the dendrogram to find the optimal number of clusters
import scipy.cluster.hierarchy as sch
def get_dendrogram(X):
    sch.dendrogram(sch.linkage(X, method = 'ward'))
    plt.title('Dendrogram')
    plt.xlabel('Customers')
    plt.ylabel('Euclidean distances')
    plt.show()


# Fitting Hierarchical Clustering to the dataset
from sklearn.cluster import AgglomerativeClustering
def h_cluster(X, num_clus):
    hc = AgglomerativeClustering(n_clusters = num_clus, affinity = 'euclidean', linkage = 'ward')
    y_hc = hc.fit_predict(X)
    return hc, y_hc


if __name__ == '__main__':
    X = preprocess(FILE, 3, 5)
    color = ['red', 'blue', 'green', 'cyan', 'magenta']
    get_dendrogram(X)
    num_clus = 5
    hc, y_hc = h_cluster(X, num_clus)
    for i in range(num_clus):
        plt.scatter(X[y_hc == i, 0], X[y_hc == i, 1], s = 100, c = color[i], label = 'Cluster {}'.format(i))
    
    plt.title('Clusters of customers')
    plt.xlabel('Annual Income (k$)')
    plt.ylabel('Spending Score (1-100)')
    plt.legend()
    plt.show()