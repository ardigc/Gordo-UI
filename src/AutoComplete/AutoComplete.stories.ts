import AutoComplete from './AutoComplete'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: AutoComplete,
  title: 'GordoUI/Autocomplete',
  tags: ['autodocs'],
} satisfies Meta<typeof AutoComplete>

export default meta

type Story = StoryObj<typeof meta>

export const primary: Story = {
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  args: {
    options: [
      { label: 'The Shawshank Redemption', value: 'The Shawshank Redemption' },
      { label: 'The Godfather', value: 'The Godfather' },
      { label: 'The Godfather: Part II', value: 'The Godfather: Part II' },
      { label: 'The Dark Knight', value: 'The Dark Knight' },
      { label: '12 Angry Men', value: '12 Angry Men' },
      { label: "Schindler's List", value: "Schindler's List" },
      { label: 'Pulp Fiction', value: 'Pulp Fiction' },
      {
        label: 'The Lord of the Rings: The Return of the King',
        value: 'The Lord of the Rings: The Return of the King',
      },
      {
        label: 'The Good, the Bad and the Ugly',
        value: 'The Good, the Bad and the Ugly',
      },
      { label: 'Fight Club', value: 'Fight Club' },
      {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        value: 'The Lord of the Rings: The Fellowship of the Ring',
      },
      {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        value: 'Star Wars: Episode V - The Empire Strikes Back',
      },
      { label: 'Forrest Gump', value: 'Forrest Gump' },
      { label: 'Inception', value: 'Inception' },
      {
        label: 'The Lord of the Rings: The Two Towers',
        value: 'The Lord of the Rings: The Two Towers',
      },
      {
        label: "One Flew Over the Cuckoo's Nest",
        value: "One Flew Over the Cuckoo's Nest",
      },
      { label: 'Goodfellas', value: 'Goodfellas' },
      { label: 'The Matrix', value: 'The Matrix' },
      { label: 'Seven Samurai', value: 'Seven Samurai' },
      {
        label: 'Star Wars: Episode IV - A New Hope',
        value: 'Star Wars: Episode IV - A New Hope',
      },
      { label: 'City of God', value: 'City of God' },
      { label: 'Se7en', value: 'Se7en' },
      { label: 'The Silence of the Lambs', value: 'The Silence of the Lambs' },
      { label: "It's a Wonderful Life", value: "It's a Wonderful Life" },
      { label: 'Life Is Beautiful', value: 'Life Is Beautiful' },
      { label: 'The Usual Suspects', value: 'The Usual Suspects' },
      { label: 'Léon: The Professional', value: 'Léon: The Professional' },
      { label: 'Spirited Away', value: 'Spirited Away' },
      { label: 'Saving Private Ryan', value: 'Saving Private Ryan' },
      {
        label: 'Once Upon a Time in the West',
        value: 'Once Upon a Time in the West',
      },
      { label: 'American History X', value: 'American History X' },
      { label: 'Interstellar', value: 'Interstellar' },
      { label: 'Casablanca', value: 'Casablanca' },
      { label: 'City Lights', value: 'City Lights' },
      { label: 'Psycho', value: 'Psycho' },
      { label: 'The Green Mile', value: 'The Green Mile' },
      { label: 'The Intouchables', value: 'The Intouchables' },
      { label: 'Modern Times', value: 'Modern Times' },
      { label: 'Raiders of the Lost Ark', value: 'Raiders of the Lost Ark' },
      { label: 'Rear Window', value: 'Rear Window' },
      { label: 'The Pianist', value: 'The Pianist' },
      { label: 'The Departed', value: 'The Departed' },
      {
        label: 'Terminator 2: Judgment Day',
        value: 'Terminator 2: Judgment Day',
      },
      { label: 'Back to the Future', value: 'Back to the Future' },
      { label: 'Whiplash', value: 'Whiplash' },
      { label: 'Gladiator', value: 'Gladiator' },
      { label: 'Memento', value: 'Memento' },
      { label: 'The Prestige', value: 'The Prestige' },
      { label: 'The Lion King', value: 'The Lion King' },
      { label: 'Apocalypse Now', value: 'Apocalypse Now' },
      { label: 'Alien', value: 'Alien' },
      { label: 'Sunset Boulevard', value: 'Sunset Boulevard' },
      {
        label:
          'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        value:
          'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      },
      { label: 'The Great Dictator', value: 'The Great Dictator' },
      { label: 'Cinema Paradiso', value: 'Cinema Paradiso' },
      { label: 'The Lives of Others', value: 'The Lives of Others' },
      { label: 'Grave of the Fireflies', value: 'Grave of the Fireflies' },
      { label: 'Paths of Glory', value: 'Paths of Glory' },
      { label: 'Django Unchained', value: 'Django Unchained' },
      { label: 'The Shining', value: 'The Shining' },
      { label: 'WALL·E', value: 'WALL·E' },
      { label: 'American Beauty', value: 'American Beauty' },
      { label: 'The Dark Knight Rises', value: 'The Dark Knight Rises' },
      { label: 'Princess Mononoke', value: 'Princess Mononoke' },
      { label: 'Aliens', value: 'Aliens' },
      { label: 'Oldboy', value: 'Oldboy' },
      {
        label: 'Once Upon a Time in America',
        value: 'Once Upon a Time in America',
      },
      {
        label: 'Witness for the Prosecution',
        value: 'Witness for the Prosecution',
      },
      { label: 'Das Boot', value: 'Das Boot' },
      { label: 'Citizen Kane', value: 'Citizen Kane' },
      { label: 'North by Northwest', value: 'North by Northwest' },
      { label: 'Vertigo', value: 'Vertigo' },
      {
        label: 'Star Wars: Episode VI - Return of the Jedi',
        value: 'Star Wars: Episode VI - Return of the Jedi',
      },
      { label: 'Reservoir Dogs', value: 'Reservoir Dogs' },
      { label: 'Braveheart', value: 'Braveheart' },
      { label: 'M', value: 'M' },
      { label: 'Requiem for a Dream', value: 'Requiem for a Dream' },
      { label: 'Amélie', value: 'Amélie' },
      { label: 'A Clockwork Orange', value: 'A Clockwork Orange' },
      { label: 'Like Stars on Earth', value: 'Like Stars on Earth' },
      { label: 'Taxi Driver', value: 'Taxi Driver' },
      { label: 'Lawrence of Arabia', value: 'Lawrence of Arabia' },
      { label: 'Double Indemnity', value: 'Double Indemnity' },
      {
        label: 'Eternal Sunshine of the Spotless Mind',
        value: 'Eternal Sunshine of the Spotless Mind',
      },
      { label: 'Amadeus', value: 'Amadeus' },
      { label: 'To Kill a Mockingbird', value: 'To Kill a Mockingbird' },
      { label: 'Toy Story 3', value: 'Toy Story 3' },
      { label: 'Logan', value: 'Logan' },
      { label: 'Full Metal Jacket', value: 'Full Metal Jacket' },
      { label: 'Dangal', value: 'Dangal' },
      { label: 'The Sting', value: 'The Sting' },
      { label: '2001: A Space Odyssey', value: '2001: A Space Odyssey' },
      { label: 'Singin in the Rain', value: 'Singin in the Rain' },
      { label: 'Toy Story', value: 'Toy Story' },
      { label: 'Bicycle Thieves', value: 'Bicycle Thieves' },
      { label: 'The Kid', value: 'The Kid' },
      { label: 'Inglourious Basterds', value: 'Inglourious Basterds' },
      { label: 'Snatch', value: 'Snatch' },
      { label: '3 Idiots', value: '3 Idiots' },
      {
        label: 'Monty Python and the Holy Grail',
        value: 'Monty Python and the Holy Grail',
      },
    ],
    label: 'Peliculas',
    classes: { inputClassname: 'border' },
    onInputChange(ev, newValue) {
      const target = ev.currentTarget
      console.log(target.value)
      console.log(newValue)
    },
  },
}
const timecomponents = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
      index % 2 === 0 ? '00' : '30'
    }`
)
// export const hours: Story = {
//   args: {
//     options: timecomponents,
//     classes: { inputClassname: 'bg-slate-400 ' },
//     label: 'Horas',
//   },
// }
