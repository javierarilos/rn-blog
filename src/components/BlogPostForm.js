import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = React.useState(initialValues.title);
    const [content, setContent] = React.useState(initialValues.content);

    return (<View>
        <Text style={styles.label}>Title:</Text>
        <TextInput value={title} onChangeText={setTitle} style={styles.input}/>
        <Text style={styles.label}>Contents:</Text>
        <TextInput value={content} onChangeText={setContent} style={styles.input}/>
        <Button 
            title="Save BlogPost" onPress={() => onSubmit(title, content)}
        />
    </View>);
};

BlogPostForm.defaultProps = { // automtically bound by React if needed
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 18,
        marginBottom: 15,
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5 
    }
});

export default BlogPostForm;