import input_data
import tensorflow as tf
IMAGE_SIZE_X = 28
IMAGE_SIZE_Y = 28
DIGIT = 10

mnist = input_data.read_data_sets("MNIST_data/", one_hot=True)

x = tf.placeholder("float", [None, IMAGE_SIZE_X * IMAGE_SIZE_Y])

# prepare data
W = tf.Variable(tf.zeros([IMAGE_SIZE_X * IMAGE_SIZE_Y, DIGIT]))
b = tf.Variable(tf.zeros([DIGIT])) # biases


# compute softmax regression
y = tf.nn.softmax(tf.matmul(x, W) + b)
# For cross entropy
y_ = tf.placeholder("float", [None, DIGIT])

cross_entropy = -tf.reduce_sum(y_ * tf.log(y))

# back pro
train_step = tf.train.GradientDescentOptimizer(0.01).minimize(cross_entropy)

# start the model

init = tf.global_variables_initializer()
sess = tf.Session()

sess.run(init)

# start training from train set
for i in range(1000):
  batch_xs, batch_ys = mnist.train.next_batch(100)
  sess.run(train_step, feed_dict={x: batch_xs, y_: batch_ys})

correct_prediction = tf.equal(tf.argmax(y,1), tf.argmax(y_,1))
accuracy = tf.reduce_mean(tf.cast(correct_prediction, "float"))


print(sess.run(accuracy, feed_dict={x: mnist.test.images, y_: mnist.test.labels}))