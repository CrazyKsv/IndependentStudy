# K-Means Clustering

# Importing the libraries

import matplotlib.pyplot as plt
import pandas as pd

FILE = 'Mall_Customers.csv'

def preprocess(file, x_start, x_end):
    
    # Importing the dataset
    dataset = pd.read_csv('Mall_Customers.csv')
    X = dataset.iloc[:, x_start: x_end].values
    return X


# Using the elbow method to find the optimal number of clusters
from sklearn.cluster import KMeans
def wcss_kMeans_cluster(X):
    wcss = []
    for i in range(1, 10):
        kmeans = KMeans(n_clusters = i, init = 'k-means++', random_state = 42)
        kmeans.fit(X)
        wcss.append(kmeans.inertia_)
    plt.plot(range(1, 10), wcss)
    plt.title('The Elbow Method')
    plt.xlabel('Number of clusters')
    plt.ylabel('WCSS')
    plt.show()


# Fitting K-Means to the dataset
def Kmeans(num_clusters, X):
    
    kmeans = KMeans(n_clusters = num_clusters, init = 'k-means++')
    y_kmeans = kmeans.fit_predict(X)
    return kmeans, y_kmeans


if __name__ == '__main__':
    X = preprocess(FILE, 3, 5)
    wcss_kMeans_cluster(X)
    num_clus = 5
    kmeans, y_kmeans = Kmeans(num_clus, X)
    color = ['red', 'blue', 'green', 'cyan', 'magenta']
    # Visualising the clusters
    for i in range(num_clus):
        plt.scatter(X[y_kmeans == i, 0], X[y_kmeans == i, 1], s = 100, c = color[i], label = 'Cluster {}'.format(i))
    plt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], s = 300, c = 'yellow', label = 'Centroids')
    plt.title('Clusters of customers')
    plt.xlabel('Annual Income (k$)')
    plt.ylabel('Spending Score (1-100)')
    plt.legend()
    plt.show()