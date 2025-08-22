# Arecanut Disease Detection Datasets & Images

This directory contains datasets and sample images for training your heterogeneous deep learning framework.

## 🖼️ Sample Images Generated ✅

### Arecanut Disease Sample Images (640x640px)
- **`sample_images/arecanut_healthy.jpg`** - Healthy arecanut palm with green fruits
- **`sample_images/arecanut_fruit_rot.jpg`** - Fruit rot disease (Phytophthora infection)
- **`sample_images/arecanut_leaf_spot.jpg`** - Leaf spot disease with fungal symptoms
- **`sample_images/arecanut_stem_bleeding.jpg`** - Stem bleeding disease (Ganoderma)
- **`sample_images/arecanut_bud_rot.jpg`** - Bud rot with wilted crown symptoms
- **`sample_images/arecanut_koleroga.jpg`** - Koleroga disease on nuts

## ✅ Already Downloaded

### 1. Downsampled Plant Disease Dataset
- **File**: `downsampled-plant-disease-dataset.zip`
- **Size**: Small (downloaded successfully)
- **Content**: Reduced version of PlantVillage for quick testing
- **Usage**: Perfect for initial model development and testing

## 📥 Manual Download Required (Large Files)

### 2. PlantVillage Dataset (Primary Dataset)
```bash
# Clone the repository (18,000+ images, 54 classes)
git clone https://github.com/spMohanty/PlantVillage-Dataset.git

# Or download via browser
# https://github.com/spMohanty/PlantVillage-Dataset
```
**Size**: ~2.5GB | **Classes**: 38 plant diseases | **Images**: 54,000+

### 3. Arecanut-Specific Dataset
```bash
# Clone the arecanut processing repository
git clone https://github.com/manoharvellala/ArecaNutImageProcessing.git
```
**Size**: ~560MB | **Content**: Arecanut CNN implementation + sample images

## 🔑 Kaggle Datasets (Requires API Setup)

### Setup Kaggle API
```bash
# Install Kaggle CLI
pip install kaggle

# Setup API credentials
# 1. Go to https://www.kaggle.com/account
# 2. Create new API token
# 3. Download kaggle.json
# 4. Place in ~/.kaggle/kaggle.json (Linux/Mac) or C:\Users\<username>\.kaggle\kaggle.json (Windows)
```

### Download Kaggle Datasets
```bash
# New Plant Diseases Dataset (70,000+ images)
kaggle datasets download -d vipoooool/new-plant-diseases-dataset
unzip new-plant-diseases-dataset.zip

# Plant Pathology 2020 Competition Data
kaggle competitions download -c plant-pathology-2020-fgvc7
unzip plant-pathology-2020-fgvc7.zip

# PlantDoc Classification Dataset  
kaggle datasets download -d nirmalsankalana/plantdoc-dataset
unzip plantdoc-dataset.zip
```

## 🚀 Quick Start Guide

### 1. Extract Downloaded Dataset
```bash
cd datasets
unzip downsampled-plant-disease-dataset.zip
```

### 2. Python Data Loading Script
```python
import os
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import cv2
import numpy as np

def load_arecanut_sample_images():
    """Load generated sample images for initial testing"""
    
    sample_images = [
        "datasets/sample_images/arecanut_healthy.jpg",
        "datasets/sample_images/arecanut_fruit_rot.jpg", 
        "datasets/sample_images/arecanut_leaf_spot.jpg",
        "datasets/sample_images/arecanut_stem_bleeding.jpg",
        "datasets/sample_images/arecanut_bud_rot.jpg",
        "datasets/sample_images/arecanut_koleroga.jpg"
    ]
    
    labels = ['healthy', 'fruit_rot', 'leaf_spot', 'stem_bleeding', 'bud_rot', 'koleroga']
    
    images = []
    for img_path in sample_images:
        img = cv2.imread(img_path)
        img = cv2.resize(img, (224, 224))
        img = img / 255.0  # Normalize
        images.append(img)
    
    return np.array(images), labels

def load_plant_disease_data():
    """Load the downsampled plant disease dataset"""
    
    # Path to extracted dataset
    dataset_path = "datasets/downsampled-plant-disease-dataset/Dataset"
    
    # Data generators with augmentation
    train_datagen = ImageDataGenerator(
        rescale=1./255,
        rotation_range=40,
        width_shift_range=0.2,
        height_shift_range=0.2,
        shear_range=0.2,
        zoom_range=0.2,
        horizontal_flip=True,
        fill_mode='nearest',
        validation_split=0.2
    )
    
    # Training data
    train_generator = train_datagen.flow_from_directory(
        dataset_path,
        target_size=(224, 224),
        batch_size=32,
        class_mode='categorical',
        subset='training'
    )
    
    # Validation data  
    validation_generator = train_datagen.flow_from_directory(
        dataset_path,
        target_size=(224, 224),
        batch_size=32,
        class_mode='categorical',
        subset='validation'
    )
    
    return train_generator, validation_generator

# Usage
train_data, val_data = load_plant_disease_data()
print(f"Training classes: {train_data.class_indices}")
print(f"Training samples: {train_data.samples}")
print(f"Validation samples: {val_data.samples}")
```

## 📊 Dataset Summary

| Dataset | Size | Images | Classes | Best For |
|---------|------|--------|---------|----------|
| **Sample Images** | **640KB** | **6** | **6** | **Initial testing & prototyping** |
| Downsampled Plant Disease | Small | ~2,000 | 15+ | Quick testing |
| PlantVillage | 2.5GB | 54,000+ | 38 | Main training |
| New Plant Diseases | Large | 70,000+ | 38 | Enhanced training |
| Arecanut Specific | 560MB | Custom | 2+ | Domain-specific |

## 🔧 Next Steps

1. **Start with downsampled dataset** for initial development
2. **Download PlantVillage** for comprehensive training  
3. **Fine-tune on arecanut data** for domain specificity
4. **Implement heterogeneous architecture** combining multiple CNN models

## 📁 Recommended Folder Structure
```
datasets/
├── downsampled-plant-disease-dataset/    # ✅ Downloaded
├── PlantVillage-Dataset/                 # Manual download
├── ArecaNutImageProcessing/              # Manual download  
├── new-plant-diseases-dataset/           # Kaggle download
└── processed/                            # Your processed data
    ├── train/
    ├── validation/
    └── test/
```

Happy training! 🌱🤖