<script>
    import PageBuilder from '../../utility/PageBuilder.svelte'
    import PackageItem from './packageItem.svelte'
    let pks = {
        uniqueComponent: PackageItem,
        dbPath: 'packages',
        maxActive: 3,
        flexDirection: "u-row",
        itemName: "packages",
        defaultData: {
            headline: "maldives deluxe package",
            stars: 3,
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula."

        }
    }
</script>

<PageBuilder {...pks}  />

