"""
Utility functions for loading and processing arecanut disease images
"""
import os
import cv2
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from sklearn.model_selection import train_test_split

def load_sample_arecanut_images():
    """
    Load the generated sample arecanut disease images
    Returns: images array, labels, class names
    """
    sample_images = [
        "sample_images/arecanut_healthy.jpg",
        "sample_images/arecanut_fruit_rot.jpg", 
        "sample_images/arecanut_leaf_spot.jpg",
        "sample_images/arecanut_stem_bleeding.jpg",
        "sample_images/arecanut_bud_rot.jpg",
        "sample_images/arecanut_koleroga.jpg"
    ]
    
    class_names = ['healthy', 'fruit_rot', 'leaf_spot', 'stem_bleeding', 'bud_rot', 'koleroga']
    
    images = []
    labels = []
    
    for idx, img_path in enumerate(sample_images):
        if os.path.exists(img_path):
            img = cv2.imread(img_path)
            img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # Convert BGR to RGB
            img = cv2.resize(img, (224, 224))
            img = img.astype('float32') / 255.0  # Normalize
            images.append(img)
            labels.append(idx)
        else:
            print(f"Warning: Image not found: {img_path}")
    
    return np.array(images), np.array(labels), class_names

def visualize_sample_images():
    """Display the sample arecanut disease images"""
    images, labels, class_names = load_sample_arecanut_images()
    
    plt.figure(figsize=(15, 10))
    for i in range(len(images)):
        plt.subplot(2, 3, i + 1)
        plt.imshow(images[i])
        plt.title(f"{class_names[labels[i]]}")
        plt.axis('off')
    
    plt.tight_layout()
    plt.show()

def create_arecanut_data_generators(validation_split=0.2):
    """
    Create data generators for arecanut disease classification
    """
    # Data augmentation for training
    train_datagen = ImageDataGenerator(
        rescale=1./255,
        rotation_range=40,
        width_shift_range=0.2,
        height_shift_range=0.2,
        shear_range=0.2,
        zoom_range=0.2,
        horizontal_flip=True,
        brightness_range=[0.8, 1.2],
        fill_mode='nearest'
    )
    
    # Only rescaling for validation
    val_datagen = ImageDataGenerator(rescale=1./255)
    
    return train_datagen, val_datagen

def preprocess_arecanut_image(image_path, target_size=(224, 224)):
    """
    Preprocess a single arecanut image for prediction
    """
    img = cv2.imread(image_path)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    img = cv2.resize(img, target_size)
    img = img.astype('float32') / 255.0
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    return img

def display_prediction_results(image_path, prediction, class_names):
    """
    Display image with prediction results
    """
    img = cv2.imread(image_path)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    
    predicted_class = class_names[np.argmax(prediction)]
    confidence = np.max(prediction) * 100
    
    plt.figure(figsize=(10, 6))
    plt.subplot(1, 2, 1)
    plt.imshow(img)
    plt.title(f"Input Image")
    plt.axis('off')
    
    plt.subplot(1, 2, 2)
    plt.bar(class_names, prediction[0])
    plt.title(f"Prediction: {predicted_class} ({confidence:.1f}%)")
    plt.xticks(rotation=45)
    plt.ylabel('Probability')
    
    plt.tight_layout()
    plt.show()

def get_disease_info(disease_class):
    """
    Get detailed information about arecanut diseases
    """
    disease_info = {
        'healthy': {
            'description': 'Healthy arecanut palm with no disease symptoms',
            'treatment': 'Regular maintenance and monitoring'
        },
        'fruit_rot': {
            'description': 'Fruit rot disease caused by Phytophthora meadii',
            'treatment': 'Fungicide application, improve drainage, remove infected fruits'
        },
        'leaf_spot': {
            'description': 'Fungal leaf spot with yellow/brown lesions',
            'treatment': 'Copper-based fungicides, proper spacing for air circulation'
        },
        'stem_bleeding': {
            'description': 'Ganoderma infection causing stem discoloration',
            'treatment': 'Remove infected palms, soil treatment, resistant varieties'
        },
        'bud_rot': {
            'description': 'Fatal disease affecting the growing point',
            'treatment': 'Immediate removal of infected palms, drainage improvement'
        },
        'koleroga': {
            'description': 'Major fruit rot disease in Malnad region',
            'treatment': 'Bordeaux mixture spray, cultural practices'
        }
    }
    
    return disease_info.get(disease_class, {'description': 'Unknown disease', 'treatment': 'Consult expert'})

if __name__ == "__main__":
    # Test the utility functions
    print("Loading sample arecanut disease images...")
    images, labels, class_names = load_sample_arecanut_images()
    print(f"Loaded {len(images)} images with {len(class_names)} classes")
    print(f"Classes: {class_names}")
    
    # Visualize images
    visualize_sample_images()